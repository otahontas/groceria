"""File IO stuff."""
import aiofiles
from typing import List
from dataclasses import dataclass
from .config import Item, logger
import json


@dataclass
class FileIO:
    """Class for file IO."""

    db_file: str

    async def open_file(self) -> List[Item]:
        try:
            logger.info("Reading file")
            async with aiofiles.open(self.db_file, mode="r") as db:
                raw_data = await db.read()
        except FileNotFoundError:
            logger.info("Couldn't find file, returning empty list instead")
            return []
        if not raw_data:
            logger.info("File read returned nothing, returning empty list instead")
            return []
        return json.loads(raw_data)

    async def write_file(self, data: List[Item]) -> bool:
        raw_data = json.dumps(data)
        logger.info("Writing to file")
        async with aiofiles.open(self.db_file, mode="w") as db:
            result = await db.write(raw_data)
        return result == len(raw_data)
