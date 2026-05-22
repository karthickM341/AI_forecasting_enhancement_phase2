from sqlalchemy import Column, Integer, String, DateTime, JSON
from app.core.database import Base
from datetime import datetime

class ForecastHistory(Base):
    __tablename__ = "forecast_history"

    id = Column(Integer, primary_key=True, index=True)
    dataset_name = Column(String(255))
    model_name = Column(String(100))
    forecast_result = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)