import axios from 'axios';


const initialstate={
    url:"https://m4matrimony.online"
}


const ApiUrlReducer=(state=initialstate,action)=>{
    return state
    
}


export default ApiUrlReducer




// const initialstate = {
//     url: "https://m4matrimony.online"
// };

// const ApiUrlReducer = (state = initialstate, action) => {
//     return state;
// };

const axiosInstance = axios.create({
    baseURL: "https://m4matrimony.online",
    headers: {
        'Content-Type': 'application/json',
        'Host': 'm4matrimony.online',
      
    }
});

export { axiosInstance };



// export default ApiUrlReducer;
