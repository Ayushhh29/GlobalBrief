from fastapi import APIRouter
from pydantic import BaseModel

from services.context_service import (
    generate_context
)

router = APIRouter()

class ContextRequest(BaseModel):
    title: str
    description: str


@router.post("/context")
def context(data: ContextRequest):

    result = generate_context(
        data.title,
        data.description
    )

    return {
        "context": result
    }