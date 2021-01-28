import React, { useEffect, useState } from 'react';
import { getListCommentComic, getListCommentChapter } from './../../../api/comment';
import DetialComment from './components/DetialComment';
import { BsChatDots } from "react-icons/bs";
import CommentBox from './components/CommentBox';
import { Pagination } from '@material-ui/lab';
import './Comment.scss';
import Router from "next/router";
const NUMBER_ITEM = 2;
function Comment({ comicId, chapterId, asPath }) {
    let [pages, setPage] = useState(1);
    let [numberPage, setNumberPage] = useState(1);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (chapterId) {
                let result = await getListCommentChapter(pages, NUMBER_ITEM, chapterId);

                if (result.status == 200 && result.data.status == "success") {
                    setComments([...result.data.data]);
                }
            }
            else if (comicId) {
                let result = await getListCommentComic(pages, NUMBER_ITEM, comicId);

                if (result.status == 200 && result.data.status == "success") {
                    setComments([result.data.data, result.data.numberOfResult]);
                }
            }
        }
        fetchData();
    }, [pages])
    const handleChange = async (event, value) => {
        console.log(value)
        setPage(value);
    };

    const showDetialComment = () => {
        if (comments[0]) {
            return comments[0].map((item, index) => {
                return <DetialComment key={index} {...{ item, asPath }} />
            })
        }
    }

    return (
        <div className="comment_container">
            <div className="titleCmt">
                <BsChatDots></BsChatDots>
               &nbsp;<h5>Comment</h5>
            </div>
            <div>
                <CommentBox {... { comicId, asPath }} />
            </div>
            <div>
                {showDetialComment()}
            </div>
            {
                comments[1] != 0
                    ?
                    <div className="pagination">
                        <Pagination count={Math.ceil(comments[1] / 2)} color="secondary" shape="rounded" page={pages} onChange={handleChange} showFirstButton showLastButton />
                    </div>
                    :
                    <div />
            }

        </div>
    )
}
export default Comment;