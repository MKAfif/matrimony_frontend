import { USER_INFO } from "./Types";

export const userinfo = (formdata)=>{
    return{
        type    : USER_INFO,
        payload : formdata
    }
}