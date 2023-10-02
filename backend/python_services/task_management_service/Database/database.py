from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

USER = os.getenv("MYSQL_ROOT_USER")
PASSWORD = os.getenv("MYSQL_ROOT_PASSWORD")
HOST = os.getenv("MYSQL_ROOT_HOST")
DATABASE_NAME = os.getenv("MYSQL_DATABASE_NAME")

DATABASE_URL = f"mysql+mysqldb://{USER}:{PASSWORD}@{HOST}/{DATABASE_NAME}"

engine = create_engine(DATABASE_URL)
session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
