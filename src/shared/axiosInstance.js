import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 2000,
  withCredentials: true,
});

export default instance;
