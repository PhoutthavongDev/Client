import axios from "axios";


export const payment = async (token)=> 
    await axios.post('https://new-api-xi.vercel.app/api/user/create-payment-intent',{},{
    headers:{
        Authorization: `Bearer ${token}`
    }
})