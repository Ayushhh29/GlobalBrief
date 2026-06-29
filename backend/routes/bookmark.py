from fastapi import APIRouter
from pydantic import BaseModel

from services.bookmark_service import (
    save_bookmark,
    get_bookmarks,
    delete_bookmark
)

router = APIRouter()


class Bookmark(BaseModel):

    title: str
    source: str
    url: str
    user_email: str


@router.post("/bookmarks")
def add_bookmark(bookmark: Bookmark):

    return save_bookmark(
        bookmark.model_dump()
    )


@router.get("/bookmarks")
def fetch_bookmarks(email: str):

    return get_bookmarks(email)

@router.delete("/bookmarks/{bookmark_id}")
def remove_bookmark(
    bookmark_id: str
):

    return delete_bookmark(
        bookmark_id
    )