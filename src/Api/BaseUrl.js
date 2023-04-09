import axios from "axios";
const baseUrl = axios.create({
  baseURL: "https://localhost:7238/",
});
export default baseUrl;
