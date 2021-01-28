import React , {useState,useEffect} from 'react';
import Header from './../Header/Header';
import { Breadcrumb } from 'antd';
import {Link,Router} from './../../../routers';
import { useRouter } from 'next/router'
import {Container,Row,Col} from 'react-bootstrap';
import ShowListComic from './../common/ShowListComic/ShowListComic';
import SelectTypeComic from './../common/TypeComic/TypeComic';
import UrlHelper from './../../common/urlHelper';
import 'antd/dist/antd.css';
import './ComicType.scss';
function ComicType ({listComic,totalNumber,category,page,status}){
    const router = useRouter();
    let Helper = new UrlHelper(router.asPath);
    useEffect(()=>{
        console.log(router);
        console.log(status);
    },[])
    const onChangePage = (value)=>{
        let Helper = new UrlHelper(router.asPath);
        Router.replaceRoute(Helper.setParams("page",value).toString());
        window.scrollTo(200, 0);
    }
    return(
        <React.Fragment>
            <Header />
            <Container className="container_genres">
                <Row>
                    <Col xl={9} className="content_genres">
                        <Breadcrumb className="breadcrumb_genres">
                            <Breadcrumb.Item >
                                <Link route="/" >
                                    <a>Trang Chủ</a>
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link route="/" >
                                    <a>Thể Loại</a>
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link route="/">
                                    <a>{category.name}</a>
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="info_category">
                            <div>
                                <h1 className="text-center"> Thể Loại Truyện <strong>{category.name}</strong></h1>
                            </div>
                            <div className="info">
                                {category.description}
                            </div>
                        </div>
                        <div className="action">
                            <div className="action_status">
                                <Link route={Helper.deleteParams("page").setParams("status",2).toString()}>
                                    <a>
                                        <span className={status==2?"active":null}> Tất Cả</span>
                                    </a>
                                </Link>
                                <Link route={Helper.deleteParams("page").setParams("status",1).toString()}>
                                    <a>
                                        <span className={status==1?"active":null}>Hoàn Thành</span>
                                    </a>
                                </Link>
                                <Link route={Helper.deleteParams("page").setParams("status",0).toString()}>
                                    <a>
                                        <span className={status==0?"active":null}> Đang Tiến Hành</span>
                                    </a>
                                </Link>
                            </div>
                            <div>
                            </div>
                        </div>
                       <ShowListComic data={listComic} countData={totalNumber} page={page}  onChangePage ={onChangePage}/>
                    </Col>
                    <Col xl={3}>
                        <SelectTypeComic/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default ComicType ;