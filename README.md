# 🌍 GlobalBrief

An AI-powered global news platform that delivers the latest news from around the world with AI-generated summaries, historical context, future impact analysis, timelines, and personalized bookmarks.

## 🚀 Live Demo

- 🌐 Frontend: https://global-brief-rho.vercel.app
- ⚙️ Backend API: https://globalbrief.onrender.com

---

## 📖 Overview

GlobalBrief is a full-stack AI news application built using React, FastAPI, MongoDB Atlas, and Google's Gemini AI.

The platform aggregates real-time news, allows users to search and bookmark articles, and uses Generative AI to provide concise summaries, historical background, future impact predictions, timelines, and daily news digests.

---

# ✨ Features

### 📰 Real-Time News
- Latest news by country
- Category-wise news
- Pagination support

### 🔍 Search
- Search news articles
- Search history stored in MongoDB

### 🤖 AI Features
- AI News Summary
- Historical Context
- Future Impact Analysis
- Event Timeline
- AI Daily News Digest

### 👤 Authentication
- User Registration
- Login
- JWT Authentication

### 🔖 Bookmarks
- Save favourite articles
- Delete bookmarks
- View saved articles

### ☁ Cloud Deployment
- Frontend deployed on Vercel
- Backend deployed on Render
- Database hosted on MongoDB Atlas

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- FastAPI
- Python
- PyMongo
- JWT Authentication
- Uvicorn

## Database

- MongoDB Atlas

## AI

- Google Gemini API

## Deployment

- Vercel
- Render
- GitHub

---

# 🏗 Project Architecture

```
                    User
                      │
                      ▼
        React Frontend (Vercel)
                      │
                Axios Requests
                      │
                      ▼
       FastAPI Backend (Render)
             │            │
             │            │
             ▼            ▼
    Gemini AI API     MongoDB Atlas
```

---

# 📂 Project Structure

```
GlobalBrief/
│
├── backend/
│   ├── database/
│   ├── routes/
│   ├── services/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.js
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Ayushhh29/GlobalBrief.git
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```
MONGO_URI=your_mongodb_connection_string

NEWS_API_KEY=your_news_api_key

GEMINI_API_KEY=your_gemini_api_key

SECRET_KEY=your_secret_key
```

---

# 📌 API Endpoints

## News

```
GET /news
```

## Search

```
GET /news/search
```

## Summary

```
POST /summary
```

## Historical Context

```
POST /history
```

## Future Impact

```
POST /future-impact
```

## Timeline

```
POST /timeline
```

## Daily Digest

```
POST /digest
```

## Authentication

```
POST /signup

POST /login
```

## Bookmarks

```
GET /bookmarks

POST /bookmark

DELETE /bookmark
```

---

# 📷 Screenshots

```
Home Page


Search

Bookmarks

AI Summary

Daily Digest
```

---

# 🌐 Deployment

### Frontend

Hosted on **Vercel**

https://global-brief-rho.vercel.app

### Backend

Hosted on **Render**

https://globalbrief.onrender.com

### Database

Hosted on **MongoDB Atlas**

---

# 🚀 Future Improvements

- Voice-based news assistant
- Multi-language support
- Personalized AI recommendations
- News sentiment analysis
- Dark mode
- Mobile application
- Push notifications
- Trending analytics dashboard

---

# 📚 What I Learned

- React + Vite
- FastAPI
- REST APIs
- MongoDB Atlas
- JWT Authentication
- AI Integration using Gemini
- Git & GitHub
- Deployment using Render
- Deployment using Vercel
- Environment Variables
- CORS Configuration
- Cloud Database Management

---

# 👨‍💻 Author

**Ayush Shewale**

GitHub:
https://github.com/Ayushhh29

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!
