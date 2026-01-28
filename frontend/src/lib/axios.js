import axios from "axios";

//production or development
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

/**
 * Attach token to every request
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Handle token expiry globally
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token");

      // Optional but recommended
      alert("Session expired. Please login again.");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
