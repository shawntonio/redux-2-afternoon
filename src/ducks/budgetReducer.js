import Axios from "axios";

const initialState = {
	purchases: [],
	budgetLimit: null,
	loading: false
}

const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA"
const ADD_PURCHASE = 'ADD_PURCHASE'

export function requestBudgetData() {
	const data = Axios.get('/api/budget-data')
	return {
		type: REQUEST_BUDGET_DATA,
		payload: data
	}
}

export function addPurchase() {
	Axios.post('/api/budget-data/purchase', {description: 'value', price: 'value'})
}

export default (state = initialState, action) => {
	switch(action.type) {
		case `${REQUEST_BUDGET_DATA}_PENDING`:
			return {...state, loading: true}
		case `${REQUEST_BUDGET_DATA}_FULFILLED`:
			return {...action.payload.data, loading: false}
		default:
			return state;
	}
}