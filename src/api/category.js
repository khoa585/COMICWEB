import axios from './axios';
export const getListCategory =()=>{
    return axios.get("/category/getlist");
}