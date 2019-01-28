import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

api.interceptors.request.use(
 async (config) => {
   let token = '23456789';

   if (token) {
     config.headers['Authorization'] = `${ token }`
   }

   return config
 },

 (error) => {
   return Promise.reject(error)
 }
)

export default api;