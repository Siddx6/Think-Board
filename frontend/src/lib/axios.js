import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
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
