import pandas as pd
from sklearn.linear_model import LinearRegression


def train_forecast_model(file_path: str):

    df = pd.read_csv(file_path)

    df['Date'] = pd.to_datetime(df['Date'])
    df['Days'] = (df['Date'] - df['Date'].min()).dt.days

    X = df[['Days']]
    y = df['Sales']

    model = LinearRegression()
    model.fit(X, y)

    future_days = [[df['Days'].max() + i] for i in range(1, 31)]

    predictions = model.predict(future_days)

    return predictions.tolist()