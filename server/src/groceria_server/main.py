import aiofiles
import json
import os
import logging

from fastapi import Request
from fastapi import FastAPI, HTTPException, status
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import List

app = FastAPI()

logging.basicConfig(format='%(asctime)s - %(message)s', datefmt='%d-%b-%y %H:%M:%S')

db_file = os.getenv('SERVER_DB_FILE_LOCATION', "db.json")

class Item(BaseModel):
    id: str
    text: str
    isComplete: bool


async def open_file() -> List[Item]:
    try:
        async with aiofiles.open(db_file, mode="r") as db:
            raw_data = await db.read()
    except FileNotFoundError:
        return []
    if not raw_data:
        return []
    return json.loads(raw_data)


async def write_file(data: List[Item]) -> bool:
    raw_data = json.dumps(data)
    async with aiofiles.open(db_file, mode="w") as db:
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
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while writing items to file",
        )
    return item


@app.put("/api/items/{item_id}")
async def replace_item(item_id: str, item: Item):
    data = await open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not found")

    data = [item.dict() if x["id"] == item_id else x for x in data]
    if not await write_file(data):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while writing items to file",
        )
    return item


@app.delete("/api/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(item_id: str):
    data = await open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not found")

    data = list(filter(lambda x: x["id"] != item_id, data))
    if not await write_file(data):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while writing items to file",
        )


mode = os.getenv('SERVER_ENV_MODE', "development")

if mode == "production":
    spa_location = os.environ.get('SERVER_SPA_LOCATION')
    if not spa_location:
        logging.error('SPA folder not found, not able to serve frontpage!')
    templates = Jinja2Templates(directory=spa_location)


    @app.get("/")
    async def read_items():
        return FileResponse(f"{spa_location}/index.html")

    app.mount("/", StaticFiles(directory=spa_location), name="")
