import axios from "axios";
import { API_URL } from "constants";
import { setData } from "store/leadersSlice/leadersSlice";

export const leadersApi = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

leadersApi.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error),
);

leadersApi.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      console.log("Not found");
    }
    return Promise.reject(error);
  },
);

export const fetchLeaders = () => {
  return async (dispatch) => {
    leadersApi
      .get("/initial-state")
      .then((response) => dispatch(setData(response.data)))
      .catch((error) => Promise.reject(error));
  };
};
