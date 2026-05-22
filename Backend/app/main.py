from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine
from app.api.routes.upload import router as upload_router
from app.api.routes.forecast import router as forecast_router
from app.api.routes.auth import router as auth_router
from app.api.routes.forecast import router as forecast_router
from app.api.routes.admin import router as admin_router
from app.api.routes.dataset import router as dataset_router
from app.api.routes.notification import router as notification_router
from app.api.routes.reports import router as reports_router
from app.models.user import User
from app.models.dataset import Dataset
from app.models.forecast import Forecast
from app.models.notification import Notification
from app.models.forecast_metrics import ForecastMetrics

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Advanced AI Demand Forecasting",
              version="1.0.0",
              description="Enterprise API plateform for predictive analytics,demand forecasting metircs, and automated notifications"
              )


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(dataset_router)
app.include_router(forecast_router)
app.include_router(reports_router)
app.include_router(admin_router)
app.include_router(notification_router)
app.include_router(upload_router)
  
app.include_router(forecast_router)


@app.get("/")
def root():
    return {"message": "AI forecating Running successfully"}