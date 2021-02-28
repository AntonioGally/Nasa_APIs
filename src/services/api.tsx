import axios from "axios";
//My Key kcacmvZhtF2lHZT0y6Ogl4CEqOz8nOnE0ECcsJS6
const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

export default api;
