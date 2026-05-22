from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

def run_arima(data):

    df = pd.DataFrame(data)

    model = ARIMA(
        df["y"],
        order=(1,1,1)
    )

    fitted = model.fit()

    forecast = fitted.forecast(30)

    return forecast.tolist()