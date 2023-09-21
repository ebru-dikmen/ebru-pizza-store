import axios from "axios"

export const registerUser =(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})

    try{

       const response = await axios.post('http://127.0.0.1:9000/api/users/register/',user)
       dispatch({type:'USER_REGISTER_SUCCESS'})
       console.log(response)
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED' , payload:error})

    }
}