import requests

def get_brighton_data():
    response = requests.get("https://www.brightonresort.com/api/reportpal?resortName=br&useReportPal=true")
    data = response.json()
    location_data = data["currentConditions"]["resortLocations"]["location"][0]

    return {
        "name": "Brighton",
        "snow_24h": location_data["snow24Hours"]["inches"],
        "snow_48h": location_data["snow48Hours"]["inches"],
        "base_depth": location_data["base"]["inches"],
        "season_total": location_data["snowSeasonTotal"]["inches"],
        "status": data["operations"]["resortStatus"]
    }