from fastapi import APIRouter
from pydantic import BaseModel

from services.future_impact_service import (
    generate_future_impact
)

router = APIRouter()

class FutureRequest(BaseModel):

    title: str
    description: str


@router.post("/future-impact")
def future_impact(
    request: FutureRequest
):

    result = generate_future_impact(
        request.title,
        request.description
    )

    return {
        "futureImpact": result
    }