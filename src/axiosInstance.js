import axios from 'axios';

// Tokenni localStorage'dan olib kelish funksiyasi
const getAuthToken = () => {
  return localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTQyNWQ4NGNmOGZkOWRiNTNlNDk3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0NDI5MTE0MCwiZXhwIjoxNzQ0ODk1OTQwfQ.UXtMAeMrYb73Nnjmzk3DH4KC4io1VpHfMJGB578FAqI');
};

// Axios instance yaratish
const axiosInstance = axios.create({
  baseURL: 'https://spec-repo-origin.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}` 
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agar token bo'lsa, Authorization headerga qo'shish
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
