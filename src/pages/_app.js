import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../components/Home/style.scss";
import AuthContextProvider from "../context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function MyApp({ Component, pageProps }) {
  return (
	    <AuthContextProvider>
		      <Component {...pageProps}></Component>
		      <ToastContainer />
	    </AuthContextProvider>
  );
}
export default MyApp;
