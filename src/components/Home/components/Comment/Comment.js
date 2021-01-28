import React, { useState, useEffect } from "react";
import { Link } from './../../../../../routers';
import { ClockCircleOutlined } from '@ant-design/icons';
import { to_slug } from './../../../../common/stringHelper';
import { getListNewsComment } from './../../../../api/comment';
import { showTimeAgo } from './../../../../common/timeHelper';
import "./comment.scss";
function Comment() {
    const [listComment, setListComment] = useState([]);
    useEffect(() => {
        getListNewsComment(1, 6).then(data => {
            if (data.status == 200 && data.data.status == "success") {
                setListComment(data.data.data);
            }
        })
    }, [])
    const showListComment = () => {
        return listComment.map(comment => {
            return (
                <div key={comment._id}>
                    <div className="home_comment">
                        <div className="header_comment">
                            <h3 className="title">
                                <Link route={`/truyen-tranh/${to_slug(comment.comic?.name)}.${comment.comic?._id}`}>
                                    <a>
                                        {comment.comic?.name}
                                    </a>
                                </Link>
                            </h3>
                            <div className="chapter_show_comment">
                                {comment.chapter?._id ? <Link route={`/doc-truyen/${to_slug(comment.comic?.name)}-${to_slug(comment.chapter?.name)}.${comment.chapter?._id}`} >
                                    <a>{comment.chapter.name.slice(0, comment.chapter.name.indexOf(":") > 0 ? comment.chapter.name.indexOf(":") : comment.chapter.name.length)}</a>
                                </Link> : null}
                            </div>
                        </div>
                        <div className="flex_css">
                            <div className="image_user">
                                <img src={comment.creator?.user?.avatar || "/static/images/default_avatar.png"} />
                            </div>
                            <div className="user_comment_info">
                                <div className="flex_css">
                                    <div className="user_name">
                                        {comment.creator?.user ? (comment.creator?.user?.first_name + " " + comment.creator?.user?.last_name) : comment.creator?.client?.name}
                                    </div>
                                    <div className="time_comment">
                                        <ClockCircleOutlined /> <span className="time">{showTimeAgo(comment.createdAt)}</span>
                                    </div>
                                </div>
                                <div className="content_chat">
                                    {comment.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            {showListComment()}
        </div>
    )
}
export default React.memo(Comment);