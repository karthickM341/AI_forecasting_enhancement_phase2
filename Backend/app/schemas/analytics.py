from pydantic import BaseModel

class AnalyticsSummary(BaseModel):
    total_sales: float
    growth_percentage: float
    total_forecasts: int
