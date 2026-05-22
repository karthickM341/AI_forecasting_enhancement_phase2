from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

import numpy as np

def calculate_metrics(actual, predicted):

    mae = mean_absolute_error(actual, predicted)

    rmse = np.sqrt(
        mean_squared_error(actual, predicted)
    )

    r2 = r2_score(actual, predicted)

    mape = np.mean(
        np.abs((actual - predicted) / actual)
    ) * 100

    accuracy = 100 - mape

    return {
        "mae": round(mae, 2),
        "rmse": round(rmse, 2),
        "r2_score": round(r2, 2),
        "mape": round(mape, 2),
        "accuracy": round(accuracy, 2)
    }