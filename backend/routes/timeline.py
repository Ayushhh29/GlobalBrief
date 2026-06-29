from fastapi import APIRouter
from pydantic import BaseModel

from services.timeline_service import (
    generate_timeline
)

router = APIRouter()

class TimelineRequest(BaseModel):

    title: str
    description: str


@router.post("/timeline")
def timeline(
    request: TimelineRequest
):

    result = generate_timeline(
        request.title,
        request.description
    )

    return {
        "timeline": result
    }