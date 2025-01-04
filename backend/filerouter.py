from fastapi import APIRouter, Request, UploadFile, File, Body,Form,Depends,HTTPException
from model import File,FileCreate
from database import get_session

file_router = APIRouter()

@file_router.post("/api/upload-file",response_model=None)
def upload_file(file_data:FileCreate = Body(...),session = Depends(get_session)):
    try:
        # Create a new File entry
        new_file = File(
            file_name=file_data.file_name,
            file_type=file_data.file_type,
            file_value=file_data.file_value
        )

        # Add the new file to the session
        session.add(new_file)
        
        # Commit the transaction to save the file to the database
        session.commit()
        
        return {"file_id": new_file.file_id}
    
    except Exception as e:
        session.rollback()  # Rollback in case of an error
        raise HTTPException(status_code=500, detail=f"Error occurred: {str(e)}")
    

@file_router.get("/api/get-file",response_model=None)
def get_file(file_id: str, session = Depends(get_session)):
    try:
        # Query the database for the file with the given file_id
        file = session.query(File).filter(File.file_id == file_id).first()
        
        # Check if the file exists
        if file:
            return {
                "file_id": file.file_id,
                "file_name": file.file_name,
                "file_type": file.file_type,
                "file_value": file.file_value  # Returning the binary content
            }
        else:
            raise HTTPException(status_code=404, detail="File not found")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error occurred: {str(e)}")

