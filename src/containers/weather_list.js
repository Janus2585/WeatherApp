import React, { Component } from 'react';
import { connect } from 'react-redux';

//sparkline is the parent, sparkLinesLine is a child
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData) {
		//to add a key in a React list, add it to the top level element in the list, and it must be a unique piece of data
		
		//each "main" object in the cityData JSON is assigned to the argument "weather"
		//weather.main.temp is the temperature of the city at a point in time
		//loop through these temperatures to generate the graph
		const temps = cityData.list.map(weather => weather.main.temp)
		console.log(temps);

		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color ="red" />
					</Sparklines>
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