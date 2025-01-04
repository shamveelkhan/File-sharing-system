from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column,UUID,String,LargeBinary
import uuid
from pydantic import BaseModel
from pydantic import BaseModel
from typing import Optional
from uuid import UUID


Base = declarative_base()


class File(Base):
    __tablename__ = 'files'  
    
    # Define columns for the File table
    file_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    file_name = Column(String, nullable=False)  
    file_type = Column(String, nullable=False)  
    file_value = Column(LargeBinary, nullable=False) 




class FileCreate(BaseModel):
    file_name: str
    file_type: str
    file_value: bytes  # The binary file data (base64-encoded or raw binary)

    class Config:
        orm_mode = True 