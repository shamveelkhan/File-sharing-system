import os 
from dotenv import find_dotenv,load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import sessionmaker
from model import Base


_ = load_dotenv(find_dotenv())
print(os.getenv("DATABASE_URL"))
conn_str = str(os.getenv("DATABASE_URL"))
engine = create_engine(conn_str,echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_session():
    session = SessionLocal()
    try:
        yield session  
    finally:
        session.close() 

def create_all_tables():
    Base.metadata.create_all(engine)
    


def drop_all_tables():
    Base.metadata.drop_all(engine)
    return "Tables dropped"