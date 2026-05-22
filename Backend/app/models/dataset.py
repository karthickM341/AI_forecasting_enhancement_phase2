from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database import Base

class Dataset(Base):
    __tablename__ = "datasets"

    id = Column(Integer, primary_key=True)
    file_name = Column(String(255))
    upload_time = Column(DateTime, default=datetime.utcnow)