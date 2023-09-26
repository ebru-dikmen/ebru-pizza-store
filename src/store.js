import {combineReducers} from 'redux'

import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducers ,addPizzaReducer,updatePizzaReducer,getPizzaByIdReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer ,loginUserReducer, getAllUsersReducer} from './reducers/userReducers'


const finalReducer = combineReducers({
	getAllPizzas: getAllPizzasReducers,
	cart: cartReducer,
	registerUser:registerUserReducer,
	loginUser:loginUserReducer,
	addPizza:addPizzaReducer,
	getPizzaById: getPizzaByIdReducer,
	updatePizza: updatePizzaReducer,
	getAllUsers:getAllUsersReducer

});

const cartItems = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const currentUser=localStorage.getItem('currentUsers') ? JSON.parse(localStorage.getItem('currentUsers'))
:null;
const initialState = {
	cart: {
		cartItems:cartItems
	},
	loginUser:{
		currentUser:currentUser
	}
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;