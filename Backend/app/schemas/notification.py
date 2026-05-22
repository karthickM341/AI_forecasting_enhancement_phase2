from pydantic import BaseModel

class NotificationCreate(BaseModel):
    title: str
    message: str

class NotificationResponse(BaseModel):
    id: int
    title: str
    message: str
    is_read: bool