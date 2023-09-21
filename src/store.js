import {combineReducers} from 'redux'

import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducers } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'


const finalReducer = combineReducers({
	getAllPizzas: getAllPizzasReducers,
	cart: cartReducer,

});

const cartItems = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const initialState = {
	cart: {
		cartItems,
	},
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;