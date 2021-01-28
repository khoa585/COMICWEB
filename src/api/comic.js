import axios from "./axios";
export const getListComic = (type, page = 1, numberItem = 20) => {
  return axios.post("/comic/list", {
    page: page,
    numberitem: numberItem,
    type: type,
  });
};

export const getListHotComics = (type = 1, page, numberItem) => {
  return axios.post("/comic/list", {
    page: page,
    numberitem: numberItem,
    type: type,
  });
};

export const getDetailComic = (comicId) => {
  return axios.get(`/comic/detail/${comicId}`);
};
export const getComicByGenres = (page = 1, numberItem = 20, genres, status = 2) => {
  return axios.post("/comic/list-by-genres", {
    page: page,
    numberitem: numberItem,
    genres: genres,
    status: status
  })
}