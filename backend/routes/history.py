from fastapi import APIRouter
from pydantic import BaseModel

from services.history_service import (
    generate_history
)

router = APIRouter()

class HistoryRequest(BaseModel):

    title: str
    description: str


@router.post("/history")
def history(
    request: HistoryRequest
):

    return {
        "history":
        generate_history(
            request.title,
            request.description
        )
    }