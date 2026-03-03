from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Snow dashboard API"}

@app.get("/api/resorts")
def get_resorts():
    return {
    "resorts": [
        {"name": "Alta", "snowfall_24h": 12},
        {"name": "Snowbird", "snowfall_24h": 8}
    ]
}