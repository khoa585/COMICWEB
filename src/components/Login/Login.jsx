import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FaceIcon from "@material-ui/icons/Face";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from './../../../routers';
import { FACEBOOK_CLIENT_ID, GOOGLE_CLIENT_ID } from './../../../config';
import Header from './../Header/Header';
import './style.scss';
import { LoginComics, LoginFbComics, LoginGgComics } from '../../api/user';
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';
import { Formik, Form, FastField } from 'formik';
import * as Yup from "yup";
import Router from "next/router";
export default function Login() {
    const { login } = useContext(AuthContext);
    const responseFacebook = async (response) => {
        let data = await LoginFbComics(response.accessToken)
        if (data?.data?.status === "success") {
            let token = data?.data?.data?.token
            let userInfo = {
                avatar: data?.data?.data?.avatar,
                first_name: data?.data?.data?.first_name,
                last_name: data?.data?.data?.last_name,
                email: data?.data?.data?.local?.email,
            }
            login(token, userInfo)
            toast.success("Đăng nhập thành công")
            Router.push("/");
        } else {
            toast.error("Đăng nhập thất bại")
        }
    };
    const loginGoogleSuccess = async (response) => {
        const { data } = await LoginGgComics(response.accessToken);
        if (data?.status === "success") {
            let token = data?.data?.token;
            let userInfo = {
                avatar: data?.data?.avatar,
                first_name: data?.data?.first_name,
                last_name: data?.data?.last_name,
                email: data?.data?.local?.email,
            };
            login(token, userInfo);
            toast.success("Đăng nhập thành công");
            Router.push("/");
        } else {
            toast.error("Đăng nhập thất bại");
        }
    };
    const loginGoogleFall = (response) => {
        console.log(response)
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
            .required("Vui lòng điền đầy đủ thông tin"),
        password: Yup.string().required("Vui lòng điền đầy đủ thông tin")
            .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    });
    return (
        <React.Fragment>
            <Header />
            <Container fluid className="content_login">
                <Container className="container_Login">
                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_login">
                        <Link route="/">
                            <a>
                                <HomeIcon />&#160; Trang Chủ
                        </a>
                        </Link>
                        <Link route="/">
                            <a>
                                <FaceIcon />&#160; Đăng Nhập
                        </a>
                        </Link>
                    </Breadcrumbs>
                </Container>
                <Row className="justify-content-center" >
                    <Col lg={6} sm={12} xs={12}>
                        <div>
                            <Avatar>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Đăng Nhập
                        </Typography>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    let user = {
                                        email: values.email,
                                        password: values.password,
                                    }
                                    let data = await LoginComics(user)
                                
                                    if (data?.data?.status === "success") {
                                        let token = data?.data?.data?.token
                                        let userInfor = data?.data?.data?.userInfo
                                        login(token, userInfor)
                                        toast.success(`Xin chào ${userInfor.first_name}`,)
                                        values.email = ""
                                        values.password = ""
                                        Router.push("/");
                                    } else {
                                        toast.error("Vui Lòng kiểm tra Email hoặc Mật khẩu",)
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    handleBlur,
                                    handleSubmit,
                                    touched
                                }) => (

                                        <Form noValidate onSubmit={handleSubmit}>
                                            <FastField
                                                error={errors.email && touched.email ? true : false}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                label="Email Address"
                                                id="email"
                                                name="email"
                                                className={errors.email && touched.email ? "styleBoderSignUp" : ""}
                                                as={TextField}
                                                value={values.email}
                                                helperText={`${errors.email && touched.email ? errors.email : ""}`}
                                            >
                                            </FastField>
                                            <FastField
                                                error={errors.password && touched.password ? true : false}
                                                variant="outlined"
                                                margin="normal"
                                                autoComplete="current-password"
                                                label="Mật Khẩu"
                                                id="password"
                                                fullWidth
                                                className={errors.password && touched.password ? "styleBoderSignUp" : ""}
                                                name="password"
                                                as={TextField}
                                                value={values.password}
                                                helperText={`${errors.password && touched.password ? errors.password : ""}`}
                                            >
                                            </FastField>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Ghi Nhớ"
                                            />
                                            <div className="options_login_form">
                                                <Link route="/">
                                                    <a>Quên Mật Khẩu</a>
                                                </Link>
                                                <Link route="/">
                                                    <a>Đăng Ký</a>
                                                </Link>
                                            </div>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                className="submit_login"
                                            >
                                                Đăng Nhập
                                            </Button>
                                        </Form>
                                    )}
                            </Formik>
                            <span style={{ width: "100%" }}>
                                <FacebookLogin
                                    appId={FACEBOOK_CLIENT_ID}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    cssClass="login_with_facebook"
                                    textButton="Đăng Nhập Với Facebook"
                                    callback={responseFacebook}
                                />
                            </span>
                            <GoogleLogin
                                clientId={GOOGLE_CLIENT_ID}
                                onSuccess={loginGoogleSuccess}
                                onFailure={loginGoogleFall}
                                cookiePolicy={"single_host_origin"}
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="login_with_google"
                                    >
                                        Đăng Nhập Với Google
                                    </button>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
