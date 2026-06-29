from database.mongodb import bookmarks_collection
from bson import ObjectId

def save_bookmark(article):

    bookmarks_collection.insert_one(
        {
            "title": article["title"],
            "source": article["source"],
            "url": article["url"],
            "user_email": article["user_email"]
        }
    )

    return {
        "message": "Bookmark Saved"
    }

def get_bookmarks(user_email):

    bookmarks = []

    for bookmark in bookmarks_collection.find(
        {
            "user_email": user_email
        }
    ):

        bookmarks.append({

            "id": str(bookmark["_id"]),

            "title": bookmark["title"],

            "source": bookmark["source"],

            "url": bookmark.get("url", "")

        })

    return bookmarks

def delete_bookmark(bookmark_id):

    bookmarks_collection.delete_one(
        {
            "_id": ObjectId(bookmark_id)
        }
    )

    return {
        "message": "Bookmark Deleted"
    }