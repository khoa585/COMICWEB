import React, { useState } from "react";
import Header from "../Header/Header";
import "../Home/style.scss";
import { Container, Col, Row } from "react-bootstrap";
import { BsFileEarmarkText, BsCardList } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import TopComics from "../TopComics/TopComics";
import { Link } from './../../../routers';
import { to_slug } from './../../common/stringHelper';
import {
  BsChevronRight,
  BsFillPersonFill,
  BsTagFill,
  BsWifi,
  BsEyeFill,
  BsFillStarFill,
  BsHeart,
} from "react-icons/bs";
import "./style.scss";
import ChapterItem from "./components/ChapterItem";
import BackToTop from "../common/BackToTop/BackToTop";
import Comment from './../common/Comment/Comment';
export default React.memo(function DetailedStory({ data,asPath }) {
  const [ends, setEnd] = React.useState(1);
  let chap = 20;
  let start = 0;
  let end =  ends === 1 ? chap : ends;
  const showGenres = () => {
    return data.genres?.map((item) => {
      return (
        <Link route={`/the-loai/${to_slug(item)}`} key={to_slug(item)}>
          <a className="button_genres">
            {item}
          </a>
        </Link>
      )
    })
  }
  const addChap = React.useCallback(()=>{
    setEnd(data.length)
  },[])
  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      <div className="container_Detail">
        <div className="distant_Comics"></div>
        <Container className="detail_Comics">
          <Row>
            <Col lg={8} className="container_lg">
              <div className="title_Menu">
                <div className="title_comics">
                  <li className="itemListElement">
                    <span>Trang chủ</span>&#160;
                    <BsChevronRight></BsChevronRight>
                  </li>
                  <li className="itemListElement">
                    <span>Thể loại</span>&#160;<BsChevronRight></BsChevronRight>
                  </li>
                  <li className="itemListElement">
                    <span>Tên Truyện</span>
                  </li>
                </div>
              </div>
              <div className="detail-info">
                <div className="name_Story">
                  <h4>{data.name}</h4>
                  <span>Đánh giá: 9.1/10 từ 44061 lượt</span>
                </div>
                <Container className="content_Story">
                  <Row>
                    <Col lg={4}>
                      <div className="image_Store">
                        <img className="img-fluid" src={data.image} />
                      </div>
                    </Col>
                    <Col lg={8} className="list_Comics">
                      <div className="list_Info">
                        <div>
                          <Row className="author row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsFillPersonFill></BsFillPersonFill>&#160; Tác
                              giả
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                              {!data.status ? "Đang cập nhật" : "Đã hoàn tất"}
                            </Col>
                          </Row>
                          <Row className="status row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsWifi></BsWifi>&#160; Tình trạng
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>Đang tiến hành</Col>
                          </Row>
                          <Row>
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsTagFill></BsTagFill>&#160; Thể loại
                            </Col>
                            <Col className="status_ col-lg-8 show_genres" lg={8} md={8} sm={8} xs={8}>
                              {showGenres()}
                            </Col>
                          </Row>
                          <Row className="row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsEyeFill></BsEyeFill>&#160; Lượt xem
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>33333333</Col>
                          </Row>
                        </div>
                        <div className="follow row">
                          <span className="follow-link btn btn-success col-lg-4">
                            <BsHeart></BsHeart>&#160;Theo dõi
                          </span>
                          <span className="col-lg-8">
                            <b>33.521</b> Người Đã Theo Dõi
                          </span>
                          <div className="read-action mrt10">
                            <span className="btn btn-warning mrb5">
                              {" "}
                              Đọc từ đầu
                            </span>
                            <span className="btn btn-warning mrb5">
                              {" "}
                              Đọc mới nhất
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="content_detail">
                <div>
                  <h5 className="list-title">
                    <BsFileEarmarkText></BsFileEarmarkText>&#160; Nội dung
                  </h5>
                </div>
                <div>
                  <p>{data.description}</p>
                </div>
              </div>
              <div className="list_Chapter">
                <div>
                  <h5 className="list-title">
                    <BsCardList></BsCardList>&#160; DANH SÁCH CHƯƠNG
                  </h5>
                </div>
                <div className="listAll_Chapter">
                  <Row className="row head_Chap">
                    <Col className="col-lg-6 wrap_Tex" lg={6} md={6} sm={6} xs={6}>
                      <span>Số chương</span>
                    </Col>
                    <Col className="col-lg-3 wrap_Tex" >
                      <span>Cập nhật</span>
                    </Col>
                    <Col className="col-lg-3 wrap_Tex" lg={3} md={3} sm={3} xs={3}>
                      <span>Lượt xem</span>
                    </Col>
                  </Row>
                  {
                    data.chapters.slice(start, end).map((chapter) => (
                      <ChapterItem chapter={chapter} key={chapter._id} />
                    ))
                  }
                </div>
                <div className="viewsAdd">
                {
                  ends != data.length ?               
                    <button type="button" className="btn btn-link" onClick={addChap}>
                      <TiPlus></TiPlus>&#160;Xem thêm
                    </button> : <div/>
                }

                </div>
              </div>
              <div className="comment_comic">
                <Comment {...{ comicId:  data._id ,asPath }}/>
              </div>
            </Col>
            <Col lg={4}>
              <div className="comic-wrap">
                <div className="ModuleContent">
                  <div className="tab-nav clearfix">
                    <TopComics />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <BackToTop></BackToTop>
    </>
  );
})