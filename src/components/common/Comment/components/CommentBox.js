import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';
import { SmileTwoTone, SendOutlined } from '@ant-design/icons';
import { PostComment,PostReplyComment } from '../../../../api/comment'
import './CommentBox.scss';
import { Formik, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { AiOutlineSend } from "react-icons/ai";
import * as Yup from "yup";
import Router from 'next/router';
function CommentBox({ comicId,commentId,asPath}) {
    const [show, setShow] = useState(false);
    const [isshow, setisShow] = useState(true);
    const [text, setText] = useState("");
    const [showSubmit, setSubmit] = useState(false);
    const hanlderChangeTextArena = (event) => {
        if (event.target.value.length != 0) {
            setSubmit(true)
        } else {
            setSubmit(false)
        }
        setText(event.target.value)
    }
    const inputEl = React.useRef("")
    const onChange = () => {
        setShow(!show);
    }
    React.useEffect(() => {
        var regex = /=.*;/;
        const tokens = document.cookie.match(regex)
    
        if (tokens) {
            setisShow(false)
        }
    }, [])

    const onAdd = (e) => {
        setText(text + e.native);
        setShow(false);
    }
    const validationSchema = Yup.object().shape({
        inputUserName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
        inputUserMail: Yup.string().required("Vui lòng điền đầy đủ thông tin")
            .email("Nhập địa chỉ Email hợp lệ '@gmail.com'"),
    });
    return (
        <div className="container_comment">
            <div className="icon_container">
                <SmileTwoTone className="icon_select" onClick={onChange} />
            </div>

            <div className="commentGame">
                {
                    show ? <Picker onSelect={onAdd} /> : null
                }
            </div>
            <Formik
                initialValues={{
                    inputUserName: "",
                    inputUserMail: "",
                }}
                validationSchema={isshow ? validationSchema : null}
                onSubmit={async (values) => {
                    const regex = /=.*;/;
                    const tokens = document.cookie.match(regex)
                    const tokens_ = tokens ? tokens[0].substring(1, tokens[0].length - 1) : ""
                    if (tokens_ === "") {
                        if (!isshow) {
                            setisShow(true)
                            return;
                        }
                    }
                    if(commentId){
                        const userRepcmtLogin = {
                            replyText: inputEl.current.value,
                            commentId ,
                        }
                  
                        const userRepcmtNoLogin = {
                            userData : {
                                name : values.inputUserName,
                                email : values.inputUserMail
                            },
                            replyText: inputEl.current.value,
                            commentId,
                        }
                        await PostReplyComment(tokens_.length != 0 ? userRepcmtLogin : userRepcmtNoLogin, tokens_)
                        Router.push(asPath);
                    }else{
                        const userCmtLogin = {
                            comment: inputEl.current.value,
                            comicId
                        }
                        const user_Cmt_NoLogin = {
                            userData: {
                                name : values.inputUserName,
                                email : values.inputUserMail
                            },
                            comment: inputEl.current.value,
                            comicId
                        }
                        await PostComment(tokens_.length != 0 ? userCmtLogin : user_Cmt_NoLogin, tokens_)
                        Router.push(asPath);
                    }
                   
                
                }}
            >
                {({
                    values,
                    errors,
                    handleBlur,
                    handleSubmit,
                    handleChange,
                    touched
                }) =>  {
                    return (
                        <form onSubmit={handleSubmit}>
                            {
                                isshow ?
                                    <div className="loginCmt">
                                        <TextField
                                            error={errors.inputUserName && touched.inputUserName ? true : false}
                                            id="inputUserName"
                                            label="Nhập Tên Khoản *"
                                            name="inputUserName"
                                            value={values.inputUserName}
                                            className={`${errors.inputUserName && touched.inputUserName ? "StyleinputUser" : ""}`}
                                            variant="outlined"
                                            onChange={handleChange}
                                           helperText={`${errors.inputUserName && touched.inputUserName ? errors.inputUserName : ""}`}
                                        />
                                        <TextField
                                            error={errors.inputUserMail && touched.inputUserMail ? true : false}
                                            id="inputUserMail"
                                            label="Nhập Email *"
                                            name="inputUserMail"
                                            value={values.inputUserMail}
                                            className={`${errors.inputUserMail && touched.inputUserMail ? "StyleinputElPass" : ""}`}
                                            variant="outlined"
                                            onChange={handleChange}
                                             helperText={`${errors.inputUserMail && touched.inputUserMail ? errors.inputUserMail : ""}`}
                                        />
                                    </div> : <div />
                            }

                            <div className="editor">
                                <textarea rows="4"  onChange={hanlderChangeTextArena} ref={inputEl} value={text} placeholder="Nhập bình luận" />
                                <button type="submit" disabled={!showSubmit}><SendOutlined /></button>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default React.memo(CommentBox);




