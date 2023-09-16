import { ADMIN_INFO } from "./Types";

export const adminInfo  = (formdata)=>{
    return{
        type    : ADMIN_INFO,
        payload : formdata
    }
}