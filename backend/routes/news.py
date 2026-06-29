from fastapi import APIRouter
from services.news_service import (
    fetch_news,
    search_news
)

router = APIRouter()

@router.get("/news")
def get_news(country: str, category: str = "general", page: int = 1):

    data = fetch_news(country, category, page)

    return data

@router.get("/news/search")
def search(query: str):

    return search_news(query)