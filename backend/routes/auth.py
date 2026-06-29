from fastapi import APIRouter
from google.oauth2 import id_token
from google.auth.transport import requests

from database.mongodb import users_collection

router = APIRouter()

GOOGLE_CLIENT_ID = "664989564269-cs2c6jlv7uuhgthhhucq2mni5r93fugl.apps.googleusercontent.com"


@router.post("/auth/google")
def google_auth(data: dict):

    token = data["token"]

    user_info = id_token.verify_oauth2_token(
        token,
        requests.Request(),
        GOOGLE_CLIENT_ID
    )

    email = user_info["email"]

    existing_user = users_collection.find_one(
        {"email": email}
    )

    if not existing_user:

        users_collection.insert_one(
            {
                "name": user_info["name"],
                "email": email,
                "picture": user_info.get(
                    "picture",
                    ""
                )
            }
        )

    return {
    "message": "Login Success",
    "email": email,
    "name": user_info["name"]
}