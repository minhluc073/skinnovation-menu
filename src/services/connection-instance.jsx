import Axios from 'axios';

const ConnectionInstance = Axios.create({
  timeout: 20000,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

ConnectionInstance.interceptors.request.use(
  (requestConfig) => {
    console.info('EGSwing API Request:', requestConfig);
    return requestConfig;
  },
  (error) => {
    console.error('EGSwing API Request Error:', error);
    return Promise.reject(error);
  },
);

ConnectionInstance.interceptors.response.use(
  (response) => {
    console.info('EGSWing API Response:', response);
    return response;
  },
  (error) => {
    // if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    console.error('EGSWING API Response Error:', error);
    // }
    // const errorMessage = error?.response?.data?.message;
    // if (errorMessage) {
    //   return Promise.reject(new Error(errorMessage));
    // }
    return Promise.reject(error);
  },
);

export default ConnectionInstance;
