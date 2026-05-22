import pandas as pd


def generate_excel_report(data, filename="forecast_report.xlsx"):

    df = pd.DataFrame(data)

    df.to_excel(filename, index=False)

    return filename