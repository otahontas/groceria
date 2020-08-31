import aiofiles
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    id: str
    text: str
    isComplete: bool


async def open_file() -> List[Item]:
    try:
        async with aiofiles.open("db.json", mode="r") as db:
            raw_data = await db.read()
    except FileNotFoundError:
        return []
    if not raw_data:
        return []
    return json.loads(raw_data)


async def write_file(data: List[Item]) -> bool:
    raw_data = json.dumps(data)
    async with aiofiles.open("db.json", mode="w") as db:
        result = await db.write(raw_data)
    return result == len(raw_data)


@app.get("/api/items")
async def read_items():
    return await open_file()


@app.post("/api/items")
async def create_item(item: Item):
    data = await open_file()
    data.append(item.dict())
    if not await write_file(data):
        raise HTTPException(
            status_code=400, detail="Error happened while writing items to file"
        )
    return item


@app.put("/api/items/{item_id}")
async def replace_item(item_id: str, item: Item):
    data = await open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=404, detail="Not found")

    data = [item.dict() if x["id"] == item_id else x for x in data]
    if not await write_file(data):
        raise HTTPException(
            status_code=400, detail="Error happened while writing items to file"
        )
    return item


@app.delete("/api/items/{item_id}")
async def delete_item(item_id: str):
    data = await open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=404, detail="Not found")

    data = list(filter(lambda x: x["id"] == item_id, data))
    if not await write_file(data):
        raise HTTPException(
            status_code=400, detail="Error happened while writing items to file"
        )
    return item
