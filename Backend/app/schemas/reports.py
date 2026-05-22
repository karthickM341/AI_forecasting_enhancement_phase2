from pydantic import BaseModel

class ReportResponse(BaseModel):
    report_name: str
    generated_at: str
    download_url: str