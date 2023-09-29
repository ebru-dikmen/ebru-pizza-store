export const getAllOrdersReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_ORDERS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_ALL_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'GET_ALL_ORDERS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const deliverOrderReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'DELIVER_ORDER_REQUEST':
			return {
				loading: true,
			};
		case 'DELIVER_ORDER_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'DELIVER_ORDER_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};