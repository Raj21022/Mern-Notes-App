import axios from "axios";
//in production there is no need to specify the localhost url
const BASE_URL = import.meta.env.MODE==="deployment" ? 'http://localhost:5000/api':"/api";
const api = axios.create({
    baseURL: BASE_URL,   
});


export default api;