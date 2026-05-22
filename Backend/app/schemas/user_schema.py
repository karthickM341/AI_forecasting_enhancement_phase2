from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):

    name: str
    email: str
    password: str

class UserResponse(BaseModel):

    id:int
    username:str
    email:EmailStr