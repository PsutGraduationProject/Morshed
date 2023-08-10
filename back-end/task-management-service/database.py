from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker

url = URL.create(
    drivername="mysql",
    username='root',
    password='root_123',
    host='db_tms',
    database='tmsdb',
    port=3307
)

engine = create_engine(url)
Session = sessionmaker(bind=engine)
session = Session()

