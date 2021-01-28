import Login from "../components/Login/Login";
import cookies from "next-cookies";
import HeaderTag from "../components/common/HeaderTag/HeaderTag";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Head from "next/head";


const LoginPage = ({ email }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  isLoggedIn && router.push("/");
  return (
    <React.Fragment>
      <Head>
        <title>Đăng Nhập</title>
      </Head>
      <Login email={email} />
    </React.Fragment>
  );
};
export default LoginPage;

LoginPage.getInitialProps = async (ctx) => {
  const { token, userData } = cookies(ctx);
  if (token && userData && ctx.req) {
    ctx.res.writeHead(302, { Location: "/" }).end();
    console.log("running");
  }
  const { email } = ctx.query;
  if (email) return { email: email };
  return { email: "" };
};
