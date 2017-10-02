import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
	//initialize state
	constructor(props) {
		super(props);

		this.state = { term: '' };

		//bind this so that when this is called in onInputChange, this references the SearchBar
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);	
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		//tells the browser not to submit the form and clear the data
		event.preventDefault()

		//fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite cities..."
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
//null is here because mapDispatchToProps always needs to be the second argument. We don't need state here
export default connect(null, mapDispatchToProps)(SearchBar);