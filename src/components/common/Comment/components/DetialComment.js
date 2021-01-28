import React from 'react';
import './DetialComment.scss';
import { BsChevronDown, BsShieldShaded } from "react-icons/bs";
import { Picker } from 'emoji-mart';
import { SmileTwoTone } from '@ant-design/icons';
import CommentBox from './CommentBox'
import ListRepComment from './ListRepComment'
import CryptoJS from "crypto-js";
import { SECRET_KEY } from '../../../../../config';
import {showTimeAgo} from '../../../../common/timeHelper';
import { AuthContext } from '../../../../context/AuthContext'
function DetialComment({ item, asPath }) {
    const [isStatus, setStatus] = React.useState(false)
    const [show, setShow] = React.useState(false);
    const [text, setText] = React.useState("");
    const hanlderChangeTextArena = (event) => {
        setText(event.target.value)
    }

    const onChange = () => {
        setShow(!show);

    }
    const onAdd = (e) => {
        setText(text + e.native);
        setShow(false);
    }
    const clickReply = () => {
        setStatus((prev) => !prev)
    }
    return (
        <>
            <div className="ContainerCmt">
                <div className="ContainerCmt_">
                    <div className="authorImg">
                        <img
                            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/118311955_1040079646406251_1226521618126005929_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=-J7H7eeYHhYAX9nFW1D&_nc_ht=scontent.fdad1-1.fna&oh=908dc64cdbcf2b1f676fb5f1dd97b866&oe=5F6D8E1A"
                            alt="logo"
                        ></img>
                    </div>
                    <div className="detailAuthorCmt">
                        <div className="AuthorAction">

                            <div className="author">
                                <span className="member"><BsShieldShaded></BsShieldShaded>&nbsp;Thành Viên</span>
                                <div>
                                    <span className="authorName">{item.creator.client === undefined ? item.creator.user.first_name  : item.creator.client.name}</span>
                                    <span className="authorCmt">{item.content}</span>
                                </div>
                            </div>
                            <div className="statusCmt">
                                <li className="reply">
                                    <span onClick={clickReply}>Trả lời</span>
                                </li>
                                <li> {item.createdAt}</li>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    isStatus ?
                        <div className="container_">
                            <ListRepComment list={item.replies}></ListRepComment>
                            <div className="Inputcmt">
                                <div className="authorImg">
                                    <img
                                        src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/118311955_1040079646406251_1226521618126005929_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=-J7H7eeYHhYAX9nFW1D&_nc_ht=scontent.fdad1-1.fna&oh=908dc64cdbcf2b1f676fb5f1dd97b866&oe=5F6D8E1A"
                                        alt="logo"
                                    ></img>
                                </div>

                                <div className="inputtxt">
                                    <CommentBox asPath={asPath} comicId={item.comic} commentId={item._id}></CommentBox>
                                    {/* <div className="commentGame">
                                        {
                                            show ? <Picker onSelect={onAdd} /> : null
                                        }
                                    </div>
                                     <input onChange={hanlderChangeTextArena} value={text} placeholder="Nhập" />
                                    <div>
                                        <SmileTwoTone onClick={onChange} />
                                    </div>  */}

                                </div>
                            </div>
                        </div> : <div />
                }
            </div>

        </>
    )
}
export default React.memo(DetialComment);