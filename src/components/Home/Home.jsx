import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TopComics from "../TopComics/TopComics";
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap" rel="stylesheet"></link>
import Header from "../Header/Header";
import Background from "./components/Background/Background";
import "./style.scss";
import ShowComics from "./components/ShowComics.js/ShowComics";
import ViewComics from "./components/ViewComics/VisitedComics/ViewComics";
import BackToTop from "../common/BackToTop/BackToTop";
import Comment from './components/Comment/Comment';
import Footer from './../common/Footer/Footer';
export default React.memo(function Home({ data, page, countData, hot }) {
  return (
    <React.Fragment>
      <Header />
      <Background hotComics={hot} />
      <div className="distant"></div>
      <Container>
        <Row>
          <Col lg={9} className="Store_Left">
            <ShowComics data={data} pages={page} countData={countData} />
          </Col>
          <Col lg={3} className="Store_Right">
            <div className="right-side">
              <ViewComics />
            </div>
            <div className="comic-wrap">
              <div className="ModuleContent">
                <div className="tab-nav clearfix">
                  <TopComics />
                </div>
              </div>
            </div>
            <div className="new-comments">
              <div className="ModuleContent">
                <div className="darkBox">
                  <h6>Bình luận mới</h6>
                  <Comment/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="distant"></div>
      <Footer/>
      <BackToTop></BackToTop>
    </React.Fragment>
  );
})