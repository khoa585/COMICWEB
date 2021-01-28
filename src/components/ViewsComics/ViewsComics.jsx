import React from "react";
import Header from "../Header/Header";
import { Container, Row } from "react-bootstrap";
import { Link, Router } from "./../../../routers";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Button from "@material-ui/core/Button";
import { BsHeart } from "react-icons/bs";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import HomeIcon from "@material-ui/icons/Home";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import ErrorChapter from "./ErrorChapter";
import { timeToString } from "./../../common/timeHelper";
import { imageLinkChange } from "./../../common/imageLinkHelper";
import { to_slug } from "./../../common/stringHelper";
import { v4 as uuidv4 } from "uuid";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import "./style.scss";
import TabControl from "./TabControl";
import BackToTop from "../common/BackToTop/BackToTop";
export default function ViewsComics({ chapter, error }) {
    let name = chapter.chapter?.name.slice(0, (chapter.chapter?.name.indexOf(":") > 0 ? chapter.chapter?.name.indexOf(":") : chapter.chapter?.name.length))
    const [isAction, setAction] = React.useState(false);
    const [isScrcoll, setScroll] = React.useState(false)
    const [chapter_, setChapter_] = React.useState(name);
    const handleChange = (event) => {
        setChapter_(event.target.value);
        Router.pushRoute(event.target.value)
        scroll_Top()
    };
    let scroll_Top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    let ShowChapter = () => {
        return chapter.listChapters?.map((item) => {
            return (
                <MenuItem
                    key={item._id}
                    value={`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                        item.name
                    )}.${item._id}`}
                >
                    {item.name.slice(0, (item.name.indexOf(":") > 0 ? item.name.indexOf(":") : item.name.length))}
                </MenuItem>
            );
        });
    }
    let onLight = () => {
        setAction(!isAction)
    }
    const isShowButtonPreviews = () => {
        let isShowPreview = false
        chapter.listChapters?.forEach((item) => {
            if (item.index < chapter.chapter?.index) {
                isShowPreview = true;
            }
        });
        return isShowPreview;
    };

    const isShowButtonNext = () => {
        let isShowNext = false;
        chapter.listChapters?.forEach((item) => {
            if (item.index > chapter.chapter?.index) {
                isShowNext = true;
            }
        });
        return isShowNext;
    };
    const onNextChapter = () => {
        let chapterNext;
        chapter.listChapters?.forEach((item) => {
            if (item.index == chapter.chapter?.index + 1) {
                chapterNext = item;
            }
        });
        if (chapterNext) {
            setChapter_(chapterNext.name)
            Router.pushRoute(`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                chapterNext.name)}.${chapterNext._id}`)
            scroll_Top()
        }
    }
    const onPreviewChapter = () => {
        let chapterNext;
        chapter.listChapters?.forEach((item) => {
            if (item.index == chapter.chapter?.index - 1) {
                chapterNext = item;
            }
        });
        if (chapterNext) {
            setChapter_(chapterNext.name)
            Router.pushRoute(`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                chapterNext.name)}.${chapterNext._id}`)
            scroll_Top()
        }
    }
    const showOptionsSelect = () => {
        return chapter.listChapters?.map((item) => {
            return (
                <Option
                    key={item._id}
                    value={`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                        item.name
                    )}.${item._id}`}
                >
                    {item.name}
                </Option>
            );
        });
    };
    const ShowImages = () => {
        return chapter.chapter?.images?.map((item) => {
            return (
                <div className="item" key={uuidv4()}>
                    <img
                        className="img-fluid"
                        src={imageLinkChange(item)}
                        alt="img"
                    ></img>
                </div>
            );
        });
    };
    if (error) {
        return <ErrorChapter />;
    }
    let handleScroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    React.useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
    React.useEffect(()=>{
        let history = localStorage.getItem("truyenmoi_history");
        let newChapter = Object.assign({},chapter.chapter);
        delete newChapter.images ;
        if(!history){
            history= [];
            history.push(newChapter);
            localStorage.setItem("truyenmoi_history",JSON.stringify(history));
        }
        else {
            history = JSON.parse(history);
            history = history.filter((item)=>{
                return item.comic_id._id.toString() != newChapter.comic_id._id.toString() ;
            })
            history.push(newChapter);
            localStorage.setItem("truyenmoi_history",JSON.stringify(history));
        }
    },[chapter])
    let showSelected = () => {
        return <>
            {isShowButtonPreviews() ? <Button className="icon_Pre" onClick={onPreviewChapter}><SkipPreviousIcon /> </Button> : null}
            <FormControl>
                <Select
                    value={chapter_}
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    displayEmpty
                    onChange={handleChange}
                >
                    <MenuItem value={chapter_}>
                        <em>{name}</em>
                    </MenuItem>
                    {
                        ShowChapter()
                    }
                </Select>
            </FormControl>
            {isShowButtonNext() ? <Button className="icon_Next" onClick={onNextChapter}><SkipNextIcon /></Button> : null}

        </>
    }
    const gotoHome= ()=>{
        Router.pushRoute("/")
    }
    return (
        <>
            <Header></Header>
            <Container fluid className={`container_Comics_Read ${isAction ? "light" : "dark"}`}>
                <div className="distant_Comics"></div>
                <Container className="container_Read">
                    <div className="reading-control">
                        <div className="reading-control-top">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link route="/" >
                                    <a>Trang Chủ</a>
                                </Link>
                                <Link as="/the-loai" href="/register">
                                    <a>Đọc Truyện</a>
                                </Link>
                                <Link
                                    route={`/truyen-tranh/${to_slug(
                                        chapter.chapter?.name
                                    )}-${to_slug(chapter.chapter?.comic_id?.name)}.${
                                        chapter.chapter?.comic_id?._id
                                        }`}
                                >
                                    <a>{chapter.chapter?.comic_id?.name}</a>
                                </Link>
                                <span>{chapter.chapter?.name}</span>
                            </Breadcrumbs>
                            <div className="information_Comic">
                                <h5 className="detail-title">
                                    <Link route="/register" >
                                        <a>{chapter.chapter?.comic_id?.name}</a>
                                    </Link>{" "}
                                </h5>
                                <span>~&#160;{chapter.chapter?.name}</span>
                                <span title="2018-07-14T06:13:49+07:00">
                                    (Cập nhật lúc: {timeToString(chapter.chapter?.createdAt)})
                                 </span>
                            </div>
                        </div>
                        <div className="alert alert-info ">
                            <NotificationsActiveIcon></NotificationsActiveIcon>&#160;
                                <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
                        </div>
                        <div className="chose-chap">
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"
                                onClick={gotoHome}
                            >
                                <HomeIcon className="icon"></HomeIcon>
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"
                            >
                                <ErrorOutlineIcon></ErrorOutlineIcon>&#160;<span>Báo lỗi</span>
                            </Button>
                            <div className="select_Chap">
                                {showSelected()}
                            </div>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"
                                
                            >
                                <BsHeart></BsHeart>&#160;Theo dõi
                        </Button>
                            {
                                isAction ? <Button
                                    variant="contained"
                                    color="secondary"
                                    className="follow_Comics"
                                    onClick={() => { onLight() }}
                                >
                                    <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Tắt Đèn
                                 </Button> 
                                :            
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="follow_Comics"
                                        onClick={() => { onLight() }}
                                    >
                                        <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Bật Đèn
                                    </Button>
                            }

                        </div>
                    </div>
                    <div className="reading-detail box_doc">
                        {ShowImages()}
                    </div>
                </Container>
                {
                    isScrcoll ? <Container fluid className={`tab ${isAction ? "tabdark" : "tablight"}`}>
                        <Container>
                            <TabControl isAction={isAction} showSelected={showSelected} ShowChapter={ShowChapter} onPreviewChapter={onPreviewChapter} onNextChapter={onNextChapter} chapter={chapter} onLight={onLight} showOptionsSelect={showOptionsSelect}></TabControl>
                        </Container>
                    </Container>
                        :
                        null
                }
            </Container>
            <BackToTop></BackToTop>
        </>
    );
}
