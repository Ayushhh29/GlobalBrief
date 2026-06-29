from fastapi import APIRouter
from pydantic import BaseModel

from services.digest_service import (
    generate_digest
)

router = APIRouter()

class DigestRequest(BaseModel):

    articles: list


@router.post("/digest")
def digest(
    request: DigestRequest
):

    result = generate_digest(
        request.articles
    )

    return {
        "digest": result
    }