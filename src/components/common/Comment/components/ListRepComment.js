import React from 'react';
import './DetialComment.scss';
import { BsChevronDown, BsShieldShaded } from "react-icons/bs";
import { Picker } from 'emoji-mart';
function ListRepComment({list}) {
        return list.map((task,index)=>{
                    return (
                        <div className="repCmt" key={index}>
                            <div className="authorImg">
                                <img
                                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/118311955_1040079646406251_1226521618126005929_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=-J7H7eeYHhYAX9nFW1D&_nc_ht=scontent.fdad1-1.fna&oh=908dc64cdbcf2b1f676fb5f1dd97b866&oe=5F6D8E1A"
                                    alt="logo"
                                ></img>
                            </div>
                            <div className="detailAuthorCmt">
                                <div>
                                    <div className="author">
                                        <span className="member"><BsShieldShaded></BsShieldShaded>&nbsp;Thành Viên</span>&nbsp;
                                        <span className="createdAt">{task.createdAt}</span>
                                        <div>
                                            <span className="authorName">{task.content}</span>
                                            <span className="authorCmt">{task.creator.client === undefined ? task.creator.user.first_name  : task.creator.client.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                })
        
}
export default React.memo(ListRepComment);