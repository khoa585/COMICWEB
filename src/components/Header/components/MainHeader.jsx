import React, { useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiFemale, GiMale } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";

import FormHeader from "./FormHeader";
import { AuthContext } from "../../../context/AuthContext";

const MainHeader = () => {
  const { isLoggedIn, userData } = useContext(AuthContext);
  const [isDisplayInputs, setIsDisplayInputs] = useState({
    email: false,
    password: false,
  });

  const onFocusInput = (event) => {
    const { name } = event.target;
    setIsDisplayInputs((prevValue) => ({
      ...prevValue,
      [name]: true,
    }));
  };

  const onBlurInput = (event) => {
    const { name } = event.target;
    setTimeout(() => {
      setIsDisplayInputs((preValue) => ({
        ...preValue,
        [name]: false,
      }));
    }, 300);
  };
  return (
    <Row className="header_Meta_Group">
      <Col lg={2}>
        <div className="header_Logo_Right">
          <img
            src="https://www.dummies.com/wp-content/themes/dummies/img/branding/dummies.svg.gzip"
            alt="logo"
          ></img>
        </div>
      </Col>
      <Col lg={10}>
        <div className="header_Left">
          <div className="act_search">
            <input name="search" placeholder="Search..." />
          </div>
          <div>
            <button
              className="action subscribe red"
              title="Subscribe"
              type="submit"
            >
              <span>
                <BsSearch />
              </span>
            </button>
          </div>
        </div>
        <div className="header_Right">
          <div className="nav-right">
            <li className="nav-item">
              <GiMale />
            </li>
            <li className="nav-item">
              <GiFemale />
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <FaUserCircle />
                <div
                  className={`list__wrapper ${
                    isDisplayInputs.email || isDisplayInputs.password
                      ? "list__wrapper_isT"
                      : "list__wrapper__isF"
                  }`}
                >
                  <div className="list__item">
                    <div className="list">
                      <FormHeader
                        onBlurInput={onBlurInput}
                        onFocusInput={onFocusInput}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(MainHeader);
