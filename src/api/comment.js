import axios from './axios';
import { TiSortNumerically } from 'react-icons/ti';
export const getListNewsComment = (page = 1, numberItem = 6) => {
    return axios.post("/comment/list-new", {
        page: page,
        numberitem: numberItem
    })
}
export const getListCommentComic = (page = 1, numberitem = 10, comicId) => {
    return axios.post("/comment/comic", {
        page : page ,
        numberitem : numberitem,
        comicId : comicId
    });
}
export const getListCommentChapter = (page = 1, numberitem = 10, chapterId) => {
    return axios.post("/comment/chapter", {
        page: page,
        numberitem: numberitem,
        chapterId: chapterId
    });
}
export const PostComment = (data, tokens_) => {
    console.log(tokens_)
    let config = {
        headers: {
            'Authorization': tokens_
        }
    }
    return axios.post("/comment/create", {
        ...data
    }, tokens_.length != 0 ? config : null);
}
export const PostReplyComment = (data, tokens_) => {
    let config = {
        headers: {
            'Authorization': tokens_
        }
    }
    return axios.post("/comment/reply/create", {
        ...data
    }, tokens_.length != 0 ? config : null);
}