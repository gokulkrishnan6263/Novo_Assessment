import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // your API base URL from .env
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, // token from .env
  },
});

export default axiosClient;
