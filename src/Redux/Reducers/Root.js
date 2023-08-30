import { combineReducers } from "redux";
import ApiUrlReducer from "./ApiUrlReducers";
import UserInfoReducer from "./UserInfoReducer";
import MemberInfoReducer from "./MemberInfoReducer";


const rootReducer = combineReducers({
    APIURL     : ApiUrlReducer,
    userinfo   : UserInfoReducer,
    memberinfo : MemberInfoReducer,



})


export default rootReducer