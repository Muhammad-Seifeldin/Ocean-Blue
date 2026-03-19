import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error: unknown) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: unknown) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
