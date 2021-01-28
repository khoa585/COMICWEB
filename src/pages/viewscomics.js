import { detialChapter } from "./../api/chapter";
import ViewsComics from "../components/ViewsComics/ViewsComics";
import HeaderTag from "./../components/common/HeaderTag/HeaderTag";
import { to_slug } from "./../common/stringHelper";
function viewscomics({ chapter, error }) {

  return (
    <div>
      <HeaderTag
        title={chapter.chapter?.comic_id?.name + "  " + chapter.chapter.name}
      />
      <ViewsComics chapter={chapter} error={error}></ViewsComics>
    </div>
  );
}

viewscomics.getInitialProps = async (ctx) => {
  let resultChapter = await detialChapter(ctx.query.id);
  if (resultChapter.data.status == "success" && resultChapter.data.data) {
    return {
      chapter: resultChapter.data.data,
      error: null,
    };
  }
  return {
    error: 404,
  };
};
export default viewscomics;
