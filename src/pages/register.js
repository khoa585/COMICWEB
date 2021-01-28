import cookies from "next-cookies";
import Router from "next/router";
import { useContext } from "react";
import Head from "next/head";
import Register from "../components/Register/Register";
import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  isLoggedIn && Router.push("/");

  return (
    <React.Fragment>
      <Head>
        <title>Đăng kí</title>
      </Head>
      <Register />
    </React.Fragment>
  );
};

export default RegisterPage;

RegisterPage.getInitialProps = (ctx) => {
  const { token, userData } = cookies(ctx);
  if (token && userData && ctx.req) {
    ctx.res.writeHead(302, { Location: "/" }).end();
  }
  return { a: 1 };
};
