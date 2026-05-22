import pandas as pd

def export_excel(data):

    df = pd.DataFrame(data)

    file_path = "reports/report.xlsx"

    df.to_excel(file_path, index=False)

    return file_path