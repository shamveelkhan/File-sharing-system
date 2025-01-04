from fastapi import FastAPI,Depends,UploadFile,File,Request,Response
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from database import create_all_tables
from filerouter import file_router

app = FastAPI()


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating tables..")
    create_all_tables()
    yield
    
app = FastAPI(lifespan=lifespan,title="ecommerce api with sqlmodel",version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(file_router)