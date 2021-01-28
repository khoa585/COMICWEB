import axios from "./axios";
export const LoginComics = (user) => {
    const { email, password } = user
    return axios.post("/user/login", {
      email,
      password
    })
  }
  export const LoginFbComics = (data) => {
    return axios.post("/user/auth/facebook", {
      access_token: data
    })
  }
  export const LoginGgComics = (data) => {
    return axios.post("/user/auth/google", {
      access_token: data
    })
  }
  
  export const RegisterComics = (data) => {
    console.log(data)
    return axios.post("/user/register", {
      ...data
    })
  }
  