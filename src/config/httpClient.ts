import axios from 'axios';

// create a new axios instance
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// export the instance
export default axiosInstance;
