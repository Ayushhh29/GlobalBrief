from fastapi import FastAPI
from routes.news import router
from fastapi.middleware.cors import CORSMiddleware
from routes.bookmark import router as bookmark_router
from routes.summary import (
    router as summary_router
)
from routes.context import router as context_router
from routes.history import (
    router as history_router
)
from routes.future_impact import router as future_router
from routes.timeline import (
    router as timeline_router
)
from routes.digest import (
    router as digest_router
)
from routes.auth import router as auth_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://global-brief-rho.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)
app.include_router(bookmark_router)
app.include_router(summary_router)
app.include_router(context_router)
app.include_router(
    history_router
)
app.include_router(future_router)
app.include_router(
    timeline_router
)
app.include_router(
    digest_router
)

app.include_router(auth_router)
@app.get("/")
def home():
    return {
        "message": "GlobalBrief Backend Running"
    }