import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
	renderWeather(cityData) {
		//to add a key in a React list, add it to the top level element in the list, and it must be a unique piece of data
		const name = cityData.city.name;
		//each "main" object in the cityData JSON is assigned to the argument "weather"
		//weather.main.temp is the temperature of the city at a point in time
		//loop through these temperatures to generate the graph
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (9/5)*(temp-273)+32);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color="orange" units="F" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="blue" units="%" />
				</td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// { weather } is ES6 syntax for state.weather
function mapStateToProps({ weather }) {
	//weather is used here because WeatherReducer is assiged to the weather key in combineReducers()  
	return { weather };// { weather } === { weather: weather }
}

//connect the WeatherList component with the function mapStateToProps()
export default connect(mapStateToProps)(WeatherList);