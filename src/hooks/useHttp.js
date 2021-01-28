import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { BASE_URL, SECRET_KEY } from "./../../config";
import md5 from "md5";

const unittime = Date.now();
const token = md5(unittime + SECRET_KEY);

export const useHttp = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const [error, setError] = useState({
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (baseURL, method = "GET", body = {}, headers) => {
      setIsLoading(true);
      try {
        const url = BASE_URL + baseURL;
        const { data } = await axios({
          url,
          method: method,
          data: body,
          headers: { ...headers, ADMIN: "ADMIN", token: token },
          cancelToken: source.token,
        });
        setIsLoading(false);
        if (data.status !== "success") {
          setError({ message: data.status });
        }
        return data;
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request is cancelled");
        } else {
          setError({
            message: error.status,
          });
        }
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest, source };
};
