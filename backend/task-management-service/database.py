from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker
import os

url = URL.create(
    drivername="mysql",
    username=os.getenv("MYSQL_ROOT_USER"),
    password=os.getenv("MYSQL_ROOT_PASSWORD"),
    host=os.getenv("MYSQL_ROOT_HOST"),
    database=os.getenv("MYSQL_DATABASE_NAME"),
    port=os.getenv("MYSQL_PORT")
)

engine = create_engine(url)
Session = sessionmaker(bind=engine)
session = Session()

