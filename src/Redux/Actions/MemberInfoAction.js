import { MEMBER_INFO } from "./Types";

export const memberinfo = (formdata)=>{
    return{
        type    : MEMBER_INFO,
        payload : formdata
    }
}