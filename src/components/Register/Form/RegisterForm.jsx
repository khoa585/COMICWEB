import React, { useState } from "react";
import Router from "next/router";
import TextField from "@material-ui/core/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { RegisterComics } from "../../../api/user";
const RegisterForm = () => {
  let [checkMail, setCheckMail] = useState(false);
  let [isVerified, setIsVerified] = useState(false);
  let validationSchemas = Yup.object({
    firstName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
    lastName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
    email: Yup.string()
      .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
      .required("Vui lòng điền đầy đủ thông tin"),
    password: Yup.string()
      .required("Vui lòng điền đầy đủ thông tin")
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    repeatPassword: Yup.string()
      .required("Vui lòng điền đầy đủ thông tin")
      .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
  });
  let handleVerify = (value) => {
    console.log(value);
    if (value) {
      setIsVerified(true);
    }
  }
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
          gender: "male"
        }}
        validationSchema={validationSchemas}
        onSubmit={async (values) => {
          console.log(values)
          const user = {
            local: {
              email: values.email,
              password: values.password,
              repeat_password: values.repeatPassword,
            },
            method: "local",
            first_name: values.firstName,
            last_name: values.lastName,
            gender: values.gender
          };

          let data = await RegisterComics(user);
          if (data?.data?.status === "EMAIL_TAKEN") {
            setCheckMail(true);
            toast.error("Email đã tồn tại");
            return;
          }
          if (data?.data?.status === "success") {
            toast.success("Đăng Kí thành công");
            
            Router.push(`/login?email=${values.email}`);
            values.email = "";
            values.password = "";
            values.repeatPassword = "";
            values.firstName = "";
            values.lastName = "";
          } else {
            toast.error("Đăng Kí thất bại");
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
        }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <p className="label control-label">
                  <span id="field-name-prefix-label">Title*</span>
                </p>
             
                  <Field name="gender">
                    {({ field }) => (
                        <div className="control">
                        <div className="field-name-prefix-item">
                          <input
                            id="prefix-option-mr"
                            className="required-entry"
                            type="radio"
                            {...field}
                            defaultValue="Mr"
                            defaultChecked="checked"
                            value="male"
                          />
                          <label className="labeld" htmlFor="prefix-option-mr">
                            Nam
                                        </label>
                        </div>
                        <div className="field-name-prefix-item">
                          <input
                            id="prefix-option-ms"
                            className="required-entry"
                            type="radio"
                            {...field}
                            value="female"
                          />
                          <label className="labeld" htmlFor="prefix-option-ms">
                            Nữ
                                        </label>
                        </div>
                        <div className="field-name-prefix-item">
                          <input
                            id="prefix-option"
                            className="required-entry"
                            type="radio"
                            {...field}
                            value="other"
                          />
                          <label className="label" htmlFor="prefix-option">
                            Khác
                                        </label>
                        </div>
                      </div>
                    )}
                  </Field>
              
                <div className="FirstName_Register">
                  <TextField
                    error={errors.firstName && touched.firstName ? true : false}
                    id="firstName"
                    label="Tên *"
                    value={values.firstName}
                    className={`${errors.firstName && touched.firstName ? "styleBoderSignUp" : ""}`}
                    name="firstName"
                    variant="outlined"
                    onChange={handleChange}
                    helperText={`${errors.firstName && touched.firstName ? errors.firstName : ""}`}
                  />
                </div>
                <div className="LastName_Register">
                  <TextField
                    error={errors.lastName && touched.lastName ? true : false}
                    id="lastName"
                    label="Họ *"
                    name="lastName"
                    value={values.lastName}
                    variant="outlined"
                    onChange={handleChange}
                    className={`${errors.lastName && touched.lastName ? "styleBoderSignUp" : ""}`}
                    helperText={`${errors.lastName && touched.lastName ? errors.lastName : ""}`}
                  />
                </div>
                <div className="Email_Register">
                  <TextField
                    error={errors.email && touched.email ? true : false}
                    id="email"
                    label="Email *"
                    name="email"
                    value={values.email}
                    variant="outlined"
                    onChange={handleChange}
                    className={!checkMail ? `${errors.email && touched.email ? "styleBoderSignUp" : ""}` : "styleBoderSignUp"}
                    onBlur={(e) => {
                      setCheckMail(false)
                    }}
                    helperText={`${errors.email && touched.email ? errors.email : checkMail ? "Email đã tồn tại" : ""}`}
                  />
                </div>
                <div className="Password_Register">
                  <TextField
                    error={errors.password && touched.password ? true : false}
                    id="outlined-password-input"
                    label="Mật khẩu"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    variant="outlined"
                    className={`${errors.password && touched.password ? "styleBoderSignUp" : ""}`}
                    value={values.password}
                    helperText={`${errors.password && touched.password ? errors.password : ""}`}
                  />
                </div>
                <div className="ResetPassword_Register">
                  <TextField
                    error={errors.repeatPassword && touched.repeatPassword ? true : false}
                    id="outlined-password-input"
                    label="Xác nhận"
                    type="password"
                    className={`${errors.repeatPassword && touched.repeatPassword ? "styleBoderSignUp" : ""}`}
                    autoComplete="current-password"
                    variant="outlined"
                    name="repeatPassword"
                    onChange={handleChange}
                    value={values.repeatPassword}
                    helperText={`${errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : ""}`}
                  />
                </div>
                <div className="my-2">
                  <ReCAPTCHA
                    sitekey="6Le6mLUZAAAAAAp0zoJgTqel2KMxlQ-ylTkVUTjs"
                    render="explicit"
                    onChange={handleVerify}
                  />
                </div>
                <div className="submitForm">
                  <button type="submit" className="btn btnSubmit" disabled={!isVerified}>
                    SUBMIT
                                      </button>
                </div>
              </div>
            </form>
          )}
      </Formik>
    </>
  );
};

export default RegisterForm;
