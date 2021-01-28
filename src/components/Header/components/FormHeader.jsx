import React, { useState, useContext } from "react";
import { Input } from "antd";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Router from "next/router";

import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from "../../../hooks/useHttp";

const FormHeader = ({ onFocusInput, onBlurInput }) => {
  const { isLoading, error, sendRequest } = useHttp();
  const { login } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const fetchData = async (user) => {
    const baseUrl = "/user/login";
    const body = {
      email: user.email,
      password: user.password,
    };
    const headers = {
      ADMIN: "ADMIN",
    };

    (async () => {
      const { data, status } = await sendRequest(
        baseUrl,
        "POST",
        body,
        headers
      );
      if (!error) {
        login(data.token, data.userInfo);
        Router.push("/home");
      }
    })();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(user);
  };

  const disabled =
    !(Object.keys(errors).length < 1) || !(user.email && user.password);

  const googleLoginSuccess = (response) => {
    (async () => {
      const { data } = await sendRequest("/user/auth/google", "POST", {
        access_token: response.accessToken,
      });
      if (!error.message) login(data.token, data.userInfo);
    })();
  };
  const googleLoginFailed = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    (async () => {
      const { data } = await sendRequest("/user/auth/facebook", "POST", {
        access_token: response.accessToken,
      });
      if (!error.message) login(data.token, data.userInfo);
    })();
  };

  return (
    <form className="form form-login" onSubmit={handleSubmit}>
      <div className="field email required">
        <div className="control">
          <span>Username</span>
          <br />
          <Input placeholder="Email" allowClear name="email" />
        </div>
      </div>
      <br />
      <div className="field password required">
        <div className="control">
          <span>Password</span>
          <br />
          <Input.Password placeholder="password" name="password" />
        </div>
      </div>
      <br />
      <div className="btn-password">
        <span>Forgot Your Password?</span>
      </div>
      <br />
      <div className="btb_login">
        <button type="submit" className="btn btnLogin" disabled={disabled}>
          login
        </button>
      </div>
      <hr />
      <div className="singup">
        <FacebookLogin
          appId="911889879332250"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="btn "
          icon="fa-facebook singup"
        />
      </div>
      <div className="my-2">
        <GoogleLogin
          clientId="84756938118-fkirs0vlk8jsbg060sdn521evefsmiha.apps.googleusercontent.com"
          onSuccess={googleLoginSuccess}
          onFailure={googleLoginFailed}
          buttonText="Login with Google"
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className="btn"
              disabled={renderProps.disabled}
            >
              Login with Google
            </button>
          )}
        />
      </div>
    </form>
  );
};

export default React.memo(FormHeader);
