"""Load app configs."""
import os
import logging
from pydantic import BaseModel

# Global env variables
db_file = os.getenv('SERVER_DB_FILE_LOCATION', "db.json")
mode = os.getenv('SERVER_ENV_MODE', "development")
spa_location = os.environ.get('SERVER_SPA_LOCATION')

# Pydantic models
class Item(BaseModel):
    id: str
    text: str
    isComplete: bool

# Logging
logging.basicConfig(format='%(asctime)s - %(message)s', datefmt='%d-%b-%y %H:%M:%S')
logger = logging.getLogger("main")
level = logging.WARNING if mode == "production" else logging.INFO
logger.setLevel(level)
