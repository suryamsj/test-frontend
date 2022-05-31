import axios from "axios";

const axiosURL = axios.create({
    baseURL: "http://13.212.226.116:8000/api/"
});

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: "",
        "Access-Control-Allow-Origin": "*",
    };

    return axiosURL({
            method,
            url,
            data: request,
            headers
        }).then(res => {
            return Promise.resolve(res.data);
        })
        .catch(err => {
            return Promise.reject(err);
        });
};

// get request
const get = (url, request) => apiRequest("get", url, request);

// post request
const post = (url, request) => apiRequest("post", url, request);

// Method
const API = {
    get,
    post,
};

export default API;