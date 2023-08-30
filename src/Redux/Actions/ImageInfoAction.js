import { IMAGE_INFO } from "./Types";

export const updateImageUrl = (imageUrl)=>{
    return{
        type    : IMAGE_INFO,
        payload : imageUrl
    }
}