import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GNEWS_API_KEY")

def fetch_news(country, category, page=1):

    url = (
        f"https://gnews.io/api/v4/top-headlines"
        f"?country={country}"
        f"&lang=en"
        f"&max=10"
         f"&page={page}"
        f"&apikey={API_KEY}"
        f"&topic={category}"
    )

    response = requests.get(url)

#     response = {
#     "totalArticles": 10,
#     "articles": [
#         {
#             "title": "News 1"
#         },
#         {
#             "title": "News 2"
#         }
#     ]
# }

    data = response.json()

    articles = []

    for article in data.get("articles", []):    #"Give me the value of articles. If it doesn't exist, give me an empty list."

        articles.append({
            "title": article["title"],
            "description": article["description"],
            "url": article["url"],
            "source": article["source"]["name"],
            "image": article.get("image")
        })

    return articles


def search_news(query):

    url = (
        f"https://gnews.io/api/v4/search"
        f"?q={query}"
        f"&apikey={API_KEY}"
    )

    response = requests.get(url)

    data = response.json()

    articles = []

    for article in data.get("articles", []):

        articles.append({

            "title": article.get("title"),

            "description": article.get("description"),

            "url": article.get("url"),

            "source": article.get(
                "source",
                {}
            ).get(
                "name",
                "Unknown"
            ),
            "image": article.get("image")

        })

    return articles