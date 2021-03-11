import axios from "axios";
const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

export default api;
