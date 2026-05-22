from pydantic import BaseModel

class DatasetResponse(BaseModel):
    id: int
    file_name: str
    uploaded_by: str