import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = '48ba31a9a3d2c880c3e7361d98d90102'; // Replace with your API key
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  async getWeather(city: string) {
    try {
      console.log(`Fetching weather data for city: ${city}`); // Log the city
      const response = await axios.get(this.apiUrl, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric', // Use metric units for temperature in Celsius
        },
      });
      console.log('Weather data fetched successfully:', response.data); // Log the response
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error.message); // Log the error
      throw new Error('Failed to fetch weather data');
    }
  }
}