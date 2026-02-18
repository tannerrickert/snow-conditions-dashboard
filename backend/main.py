from fastapi import FastAPI

app = FastAPI()

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