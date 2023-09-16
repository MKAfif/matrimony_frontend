import { CLEAR_MEMBER_INFO, MEMBER_INFO , IMAGE_INFO } from "../Actions/Types"

const initialState = {
    memberinfo  :  null,
    image_url   :  '',
}


const MemberInfoReducer = (state = initialState , action)=>{
    switch(action.type){
        case MEMBER_INFO:
            return{
                ...state,
                memberinfo : action.payload
            }

        case CLEAR_MEMBER_INFO:
            return{
                ...state,
                memberinfo:null
            }
        
        case IMAGE_INFO:
            return {
                ...state,
                memberinfo : {
                    ...state.memberinfo,
                    image_url : action.payload
                }

            }


        default:
                return state
    }
}

export default MemberInfoReducer