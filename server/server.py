import aiofiles
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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


@app.get("/api/items")
async def read_items():
    async with aiofiles.open("db.json", mode="r") as db:
        raw_content = await db.read()
    if not raw_content:
        return []
    return json.loads(raw_content)


@app.post("/api/items")
async def create_item(item: Item):
    async with aiofiles.open("db.json", mode="r") as db:
        raw_content = await db.read()
    data = json.loads(raw_content)
    data.append(item.dict())
    async with aiofiles.open("db.json", mode="w") as db:
        await db.write(json.dumps(data))
    return item


@app.put("/api/items/{item_id}")
async def replace_item(item_id: str, item: Item):
    async with aiofiles.open("db.json", mode="r") as db:
        raw_content = await db.read()
    data = json.loads(raw_content)
    data = [item.dict() if x["id"] == item_id else x for x in data]
    async with aiofiles.open("db.json", mode="w") as db:
        await db.write(json.dumps(data))


@app.delete("/api/items/{item_id}")
async def delete_item(item_id: str):
    async with aiofiles.open("db.json", mode="r") as db:
        raw_content = await db.read()
    data = json.loads(raw_content)
    data = list(filter(lambda x: x["id"] == item_id, data))
    async with aiofiles.open("db.json", mode="w") as db:
        await db.write(json.dumps(data))
