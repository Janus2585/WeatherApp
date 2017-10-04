import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
	console.log('Action received', action);

	//switch statement to only handle the FETCH_WEATHER action type
	switch (action.type) {
		case FETCH_WEATHER:
			//Never mutate the existing state object, ALWAYS return a new state object
			return [ action.payload.data, ...state ]; // returns [city, city, city], not [city, [city, city ]]
	}
	return state;
}