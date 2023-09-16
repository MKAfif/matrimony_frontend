
import { ADMIN_INFO , CLEAR_ADMIN_INFO } from "../Actions/Types";

const initialState = {
    admininfo    : null 
}


const AdminInfoReducer  = (state = initialState , action)=>{

    switch (action.type){
        case ADMIN_INFO:
            return{
                ...state,
                admininfo : action.payload
            }

        case CLEAR_ADMIN_INFO :
            return{
                ...state,
                admininfo : null
            }

        default:
            return state

        
    }

}