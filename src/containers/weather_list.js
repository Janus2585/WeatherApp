import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		//to add a key in a React list, add it to the top level element in the list, and it must be a unique piece of data
		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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