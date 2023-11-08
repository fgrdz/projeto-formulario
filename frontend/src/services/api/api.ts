import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-formulario.onrender.com/'
})

export default api