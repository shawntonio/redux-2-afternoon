import Axios from "axios";


const initialState = {
	email: null,
	firstName: null,
	lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData() {
	const data = Axios.get('/auth/user-data')

	return {
		type: REQUEST_USER_DATA,
		payload: data
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		// case `${REQUEST_USER_DATA}_PENDING`:
		case `${REQUEST_USER_DATA}_FULFILLED`:
			return {...state, ...action.payload.data.user}
		// case `${REQUEST_USER_DATA}_REJECTED`:
		default:
			return state
	}
}