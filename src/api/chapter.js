import axios from './axios';
export const detialChapter = (idChapter)=>{
    return axios.get("/chapter/detail/"+idChapter);
}