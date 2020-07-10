import axios from "axios";

export default axios.create({
  // http://localhost:3000 > heroku로 설정
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
});
