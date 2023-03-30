import axios from "axios";
const baseUrl = axios.create({
  baseURL: "http://www.learnmachinelearning.somee.com/",
});
export default baseUrl;
