import aiofiles
import json
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id: str
    text: str
    isComplete: bool

@app.get("/api/items")
async def read_items():
    async with aiofiles.open('db.json', mode='r') as db:
        raw_content = await db.read()
    return json.loads(raw_content)

@app.post("/api/items")
async def create_item(item: Item):
    async with aiofiles.open('db.json', mode='a') as db:
        await db.write(json.dumps(item))
    return item

@app.put("/api/items/{item_id}")
async def replace_item(item_id: str, item: Item):
    async with aiofiles.open('db.json', mode='r') as db:
        raw_content = await db.read()
    data = json.load(raw_content)
    async with aiofiles.open('db.json', mode='w') as db:
        await db.write(json.dumps(data))

@app.delete("/api/items/{item_id}")
async def delete_item(item_id: str, item: Item):
    async with aiofiles.open('db.json', mode='r') as db:
        raw_content = await db.read()
    data = json.load(raw_content)
    async with aiofiles.open('db.json', mode='w') as db:
        await db.write(json.dumps(data))
