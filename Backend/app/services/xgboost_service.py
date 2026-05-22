from xgboost import XGBRegressor
import numpy as np

def run_xgboost(X, y):

    model = XGBRegressor()

    model.fit(X, y)

    prediction = model.predict(X)

    return prediction.tolist()