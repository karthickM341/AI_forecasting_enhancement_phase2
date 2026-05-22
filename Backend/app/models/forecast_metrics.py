from sqlalchemy import Column, Integer, Float, String, DateTime
from app.core.database import Base
from datetime import datetime

class ForecastMetrics(Base):
    __tablename__ = "forecast_metrics"

    id = Column(Integer, primary_key=True, index=True)
    model_name = Column(String(100))
    rmse = Column(Float)
    mae = Column(Float)
    mape = Column(Float)
    accuracy = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)