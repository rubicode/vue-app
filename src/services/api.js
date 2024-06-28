import axios from "axios";
import { getUser } from "./storage";

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
});

export const setToken = token => {
    api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};


try {
    const user = getUser()
    if (user.token) {
        setToken(user.token)
    }
} catch (e) {
    console.log('token not found')
}

