import axios from 'axios';

const http = axios.create();

/**
 * Interceptor for all requests
 */
http.interceptors.request.use((config) => {

    /**
     * Add your request interceptor logic here: setting headers, authorization etc.
     */

    return config;
}, (error) => {

    /**
     * Add your error handlers here
     */

    return Promise.reject(error);
});

/**
 * Interceptor for all responces
 */
http.interceptors.response.use((response) => {

    /**
     * Add logic for successful response
     */

    return response;
}, (error) => {

    /**
     * Add logic for any error from backend
     */

    return Promise.reject(error);
});

export default http;