export const registerUserReducer=(state={},action)=>{
debugger;
    switch(action.type){
        case 'USER_REGISTER_REQUEST' : return{
            loading:true        }
        case 'USER_REGISTER_SUCCESS' : return{
            loading:false,
            success:true

        }
        case 'USER_REGISTER_FAILED' : return{
            loading:false,
            success:false
        }
        default: return state
    }
}

export const loginUserReducer=(state={},action)=>{

    switch(action.type){
        case 'USER_LOGIN_REQUEST' : return{
            loading:true        }
        case 'USER_LOGIN_SUCCESS' : return{
            loading:false,
            success:true

        }
        case 'USER_LOGIN_FAILED' : return{
            loading:false,
            success:false
        }
        default: return state
    }
}