import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

export const api = axios.create({ baseURL: API_BASE_URL });

export const jwt = localStorage.getItem("jwt");
api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
api.defaults.headers.post["Content-Type"] = "application/json";
