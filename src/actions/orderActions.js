import axios from "axios";

export const getUserOrders = () => async (dispatch, getState) => {
	dispatch({ type: 'GET_USER_ORDERS_REQUEST' });
	const user = getState().setUserData.userData;

	try {
		const response = await axios.post(
			'http://127.0.0.1:9000/api/order/getuserorders',
			{ userId: user._id },
		);
		console.log(response);
		dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
	}
};

export const getAllOrders = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_ORDERS_REQUEST' });
	try {
		const response = await axios.get(
			'http://127.0.0.1:9000/api/order/getallorders',
		);
		console.log(response);
		dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_ORDERS_FAILED', payload: error });
	}
};

export const deliverOrder = (orderid) => async (dispatch) => {
	dispatch({ type: 'CHECK_ORDER_STATUS_REQUEST' });
	try {
		const response = await axios.post(
			'http://127.0.0.1:9000/api/order/deliverorder',
			{ orderid: orderid },
		);
		console.log(response);
		alert('Order Delivered');
		const orders = await axios.get(
			'http://127.0.0.1:9000/api/order/getallorders',
		);
		window.location.reload();
		console.log(orders);
		dispatch({
			type: 'CHECK_ORDER_STATUS_SUCCESS',
			payload: orders.data,
		});
	} catch (error) {
		dispatch({ type: 'CHECK_ORDER_STATUS_FAILED', payload: error });
	}
};