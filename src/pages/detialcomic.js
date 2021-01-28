import DetailedStory from "../components/DetailedStory/DetailedStory";
import { getDetailComic } from "../api/comic";
import Head from "next/head";
import cookies from "next-cookies";
import HeaderTag from "./../components/common/HeaderTag/HeaderTag";

const detialcomic = ({ data, asPath }) => {
  return (
    <React.Fragment>
      <HeaderTag />
      <DetailedStory {...{ data, asPath }} />
    </React.Fragment>
  );
};
detialcomic.getInitialProps = async (ctx) => {
  const comicId = ctx.query.id;
  const { data } = await getDetailComic(comicId);
  return {
    data: data.data,
    asPath: ctx.asPath,
  };
};
export default detialcomic;
