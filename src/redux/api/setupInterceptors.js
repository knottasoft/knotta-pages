// import axiosInstance from "./client";
// import {LOGOUT, REFRESH_TOKEN} from "../actions/auth-actions";
//
// const setup = (store) => {
//     axiosInstance.interceptors.request.use(
//         (config) => {
//             const token = store.getState().auth.accessToken;
//             if (token) {
//                 config.headers["Authorization"] = 'Bearer ' + token;
//             }
//             return config;
//         },
//         (error) => {
//             return Promise.reject(error);
//         }
//     );
//
//     axiosInstance.interceptors.response.use(
//         (res) => {
//             return res;
//         },
//         async (err) => {
//             const originalConfig = err.config;
//             if (err.response) {
//                 // Access Token was expired
//                 if (err.response.status === 401 && !originalConfig._retry) {
//                     if(err.response.data.detail === 'No valid refresh token found.'){
//                         return store.dispatch({ type: LOGOUT });
//                     }
//                     // originalConfig._retry = true;
//                     try {
//                         const rs = await axiosInstance.post("/dj-rest-auth/token/refresh/");
//
//                         store.dispatch({ type: REFRESH_TOKEN, payload: rs.data });
//
//                         return axiosInstance(originalConfig);
//                     } catch (_error) {
//                         if(_error.response && _error.response.data){
//                             return store.dispatch({ type: LOGOUT });
//                         }
//                         return store.dispatch({ type: LOGOUT });
//                     }
//                 }
//                 if (err.response.status === 403 && err.response.data) {
//                     return Promise.reject(err.response.data);
//                 }
//             }
//
//             return Promise.reject(err);
//         }
//     );
// };
//
// export default setup;
