import os
from datetime import datetime, timedelta, timezone

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from jose import jwt
from pydantic import BaseModel, EmailStr

app = FastAPI(title="LeadFlow AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:5501",
        "http://localhost:5501",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = os.getenv("JWT_SECRET_KEY")

if not SECRET_KEY:
    raise RuntimeError("Set the JWT_SECRET_KEY environment variable.")

ALGORITHM = "HS256"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


@app.get("/")
def home():
    return {"message": "LeadFlow AI API is running"}


@app.post("/api/auth/login")
def login(data: LoginRequest):
    # Demo credentials only; replace with database authentication.
    demo_email = "demo@example.com"
    demo_password = "DemoPass123!"

    if data.email != demo_email or data.password != demo_password:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = jwt.encode(
        {
            "sub": data.email,
            "exp": datetime.now(timezone.utc) + timedelta(hours=1),
        },
        SECRET_KEY,
        algorithm=ALGORITHM,
    )

    return {
        "message": "Login successful",
        "access_token": token,
        "token_type": "bearer",
    }