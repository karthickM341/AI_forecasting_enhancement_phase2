from pydantic import BaseModel

class ForecastRequest(BaseModel):
    product: str
    region: str

class ForecastResponse(BaseModel):
    product: str
    region:str
    forecast_value:float
    accuracy:float
