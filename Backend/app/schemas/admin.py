from pydantic import BaseModel

class AdminDashboard(BaseModel):
    total_users: int
    total_datasets: int
    total_reports: int
    total_forecasts: int
