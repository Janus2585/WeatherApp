import axios from 'axios';

const API_KEY = "491da83d3b47384793915c4cad583e24";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//fetchWeather is an action creator that retrieves the weather data
export function fetchWeather(city) {
	
	const url = `${ROOT_URL}&q=${city},us`;
	//use axios to get the API data
	const request = axios.get(url);
	
	console.log('Request:', request);

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}

