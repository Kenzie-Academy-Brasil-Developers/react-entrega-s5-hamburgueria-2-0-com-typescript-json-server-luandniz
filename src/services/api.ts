import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-hamburgueri4.herokuapp.com",
});

export default api;
