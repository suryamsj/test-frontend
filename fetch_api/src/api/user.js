import API from "../service/Api";

export const register = async (user) => {
    try {
        const response = await API.post("/register", user);
        return response.detail;
    } catch (err) {
        return Promise.reject(err);
    }
};