from fastapi import APIRouter
from pydantic import BaseModel

from services.summary_service import (
    generate_summary
)

router = APIRouter()


class SummaryRequest(BaseModel):

    text: str


@router.post("/summary")
def summarize(
    request: SummaryRequest
):

    return {
        "summary":
        generate_summary(
            request.text
        )
    }