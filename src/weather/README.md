# Assignment: Open API Integration

## Description
This is a NestJS backend application that integrates with the OpenWeatherMap API to fetch weather data for a given city.

## API Endpoints
- `GET /weather?city={city}`: Fetches weather data for the specified city.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-open-api.git


#### Example Response

{
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 7.01,
        "feels_like": 5.23,
        "temp_min": 6.12,
        "temp_max": 7.77,
        "pressure": 1027,
        "humidity": 91,
        "sea_level": 1027,
        "grnd_level": 1022
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 100
    },
    "clouds": {
        "all": 100
    },
    "dt": 1738349527,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1738309216,
        "sunset": 1738342051
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
