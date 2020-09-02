import aiofiles
import os

from fastapi import Request
from fastapi import FastAPI, HTTPException, status
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from typing import List
from .config import db_file, mode, spa_location, Item, logger
from .file_io import FileIO

app = FastAPI()
io = FileIO(db_file)


@app.get("/api/items")
async def read_items():
    return await io.open_file()


@app.post("/api/items")
async def create_item(item: Item):
    data = await io.open_file()
    data.append(item.dict())
    if not await io.write_file(data):
        logger.error("Wasn't able to save item.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while saving item",
        )
    return item


@app.put("/api/items/{item_id}")
async def replace_item(item_id: str, item: Item):
    data = await io.open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not found")

    data = [item.dict() if x["id"] == item_id else x for x in data]
    if not await io.write_file(data):
        logger.error("Wasn't able to save item.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while saving item",
        )
    return item


@app.delete("/api/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(item_id: str):
    data = await io.open_file()
    if not any(x["id"] == item_id for x in data):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not found")

    data = list(filter(lambda x: x["id"] != item_id, data))
    if not await io.write_file(data):
        logger.error("Wasn't able to save item.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error happened while saving item",
        )


if mode == "production":
    if not spa_location:
        logger.critical("SPA folder not found, not able to serve frontpage!")

    @app.get("/")
    async def read_items():
        return FileResponse(f"{spa_location}/index.html")

    app.mount("/", StaticFiles(directory=spa_location), name="")
