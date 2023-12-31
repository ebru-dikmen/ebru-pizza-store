import axios from "axios"

export const registerUser =(user)=>async dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})

    try{

       const response = await axios.post('http://127.0.0.1:9000/api/users/register/',user)
       dispatch({type:'USER_REGISTER_SUCCESS',payload:response.data});
       localStorage.setItem('currentUser',JSON.stringify(response.data));
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED' , payload:error})

    }
}

export const loginUser = (user) => async(dispatch) =>{
debugger;
    dispatch({type:'USER_LOGIN_REQUEST'})
    try{
       const response = await axios.post('http://127.0.0.1:9000/api/users/login/',user)
       dispatch({type:'USER_LOGIN_SUCCESS', payload:response.data});
       console.log( response.data)
       localStorage.setItem('currentUser',JSON.stringify(response.data));
       window.location.href='/'
    }catch(error){
        dispatch({type:'USER_LOGIN_FAILED' , payload:error})

    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/'
}


export const getAllUsers = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_USERS_REQUEST' });

	try {
		const response = await axios.get(
			'http://127.0.0.1:9000/api/users/getallusers',
		);
		console.log(response);
		dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_USERS_FAILED', payload: error });
	}
};

export const setUserData = (userData) => (dispatch) => {
	dispatch({ type: 'SET_USER_DATA', payload: userData });
};

export const deleteUser = (userId) => async (dispatch) => {
	dispatch({ type: 'DELETE_USER_REQUEST' });
	try {
		const response = await axios.post(
			'http://127.0.0.1:9000/api/users/deleteuser',
			{ userid: userId },
		);
		console.log(response);
		alert('User deleted successfully');
		dispatch({ type: 'DELETE_USER_SUCCESS' });
		window.location.reload();
	} catch (error) {
		dispatch({ type: 'DELETE_USER_FAILED', payload: error });
	}
};