import axios from "axios";





export const createCategory = async(token, form)=>{


    return axios.post('https://new-api-xi.vercel.app/api/category', form,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const listCategory = async()=>{


    return axios.get('https://new-api-xi.vercel.app/api/category')
}

export const removeCategory = async(token,id)=>{


    return axios.delete('https://new-api-xi.vercel.app/api/category/'+id,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}