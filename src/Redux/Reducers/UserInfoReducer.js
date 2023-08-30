import { USER_INFO, CLEAR_USER_INFO } from "../Actions/Types";

const initialState =  {
    userinfo : null,

}

const UserInfoReducer = (state = initialState,action)=>{
    switch(action.type){
        case USER_INFO:
            return {
                ...state,
                userinfo : action.payload
            }

            case CLEAR_USER_INFO:
                return{
                    ...state,
                    userinfo:null
                }

            default:
                return state;
    }
}

export default UserInfoReducer