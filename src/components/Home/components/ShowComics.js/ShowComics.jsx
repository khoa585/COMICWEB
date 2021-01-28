import React from "react";
import { GoUnfold } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { Pagination } from '@material-ui/lab';
import Router from "next/router";
export default React.memo(function ShowComics({ data, pages, countData }) {

  const [page, setPage] = React.useState(pages);
  const handleChange = React.useCallback(async (event, value) => {
    await setPage(value);
    Router.push(`/?page=${value}`);
  },[page])
  return (
    <div>
      <div className="page-title">
        <h5>
          <GoUnfold />
          &#160;TRUYỆN MỚI CẬP NHẬT&#160;
          <BsChevronRight />
        </h5>
      </div>
      <div className="list_Stote">
        <Row>
          {data.map((item) => (
            <ImageItem
              title={item.name}
              key={item._id}
              id={item._id}
              image={item.image}
              alt={item.name}
              chapters={item.chapters}
              views={item.views}
            />
          ))}
        </Row>
      </div>
      <div className="pagination">
          <Pagination  count={Math.floor(countData/20)} color="secondary" shape="rounded" page={page} onChange={handleChange} showFirstButton showLastButton />
      </div>
    </div>
  );
})
