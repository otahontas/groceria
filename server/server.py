from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/api/items")
def read_items():
    return {"Hello": "World"}


@app.post("/api/items")
def add_item():
    pass

@app.put("/api/items")
def replace_item():
    pass

@app.delete("/api/items")
def replace_item():
    pass
