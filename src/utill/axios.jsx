import axios from 'axios';
let axiosInstance = axios.create({
  baseURL: 'https://safe-shelf-23642.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': 'https://safe-shelf-23642.herokuapp.com',

  },


});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function (err) {
  return Promise.reject(err);
});

export default axiosInstance;