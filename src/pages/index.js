import React from "react";
import { getListComic, getListHotComics } from "./../api/comic";
import Home from "../components/Home/Home";
import HeaderTag from './../components/common/HeaderTag/HeaderTag';
function HomePage({ listComics, page, numberComics, hotComics }) {

  return (
    <React.Fragment>
      <HeaderTag />
      <Home data={listComics} page={page} countData={numberComics} hot={hotComics} />
    </React.Fragment>
  );
}

export default HomePage;
HomePage.getInitialProps = async (ctx) => {

  let page = parseInt(ctx.query.page);

  if (!page) {
    page = 1;
  }
  const [resultDataListHot, resultDataList] = await Promise.all([getListHotComics(1, page), getListComic(2, page, 20)])
  return {
    listComics: resultDataList.data.data,
    page: page,
    numberComics: resultDataList.data.numberOfResult,
    hotComics: resultDataListHot.data.data,
  };
};
