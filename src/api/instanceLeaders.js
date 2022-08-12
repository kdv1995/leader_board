import axios from "axios";
import { API_URL } from "constants";

export const instanceLeaders = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

instanceLeaders.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error),
);

instanceLeaders.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      instanceLeaders.get(API_URL);
    }
    return Promise.reject(error);
  },
);
