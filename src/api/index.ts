import axios from "axios";

// axios instance를 생성합니다.
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default instance;
