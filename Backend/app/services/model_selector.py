from app.services.forecasting.prophet_service import run_prophet
from app.services.forecasting.arima_service import run_arima

def run_forecast(model_name, df):

    if model_name == "prophet":
        return run_prophet(df)

    elif model_name == "arima":
        return run_arima(df)

    else:
        raise Exception("Invalid model selected")