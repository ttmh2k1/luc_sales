import axios from "axios";
import config from "../config/api.json"

const login = (username, password) => {
    const data = {
        loginKey: username,
        password: password
    }
    return axios.post(config.baseURL + "api/admin/login", data).then((response) => {
        const temp = response.data; console.log("🚀 ~ file: login.js ~ line 12 ~ returnaxios.post ~ temp", temp)
        if (temp.token) {
            const token = temp.token;
            localStorage.setItem('token', token);
            return temp;
        } else {
            return null;
        }
    }, (error) => {
        console.log("🚀 ~ file: login.js ~ line 19 ~ returnaxios.post ~ error", error)
        alert(error.response.data.message)
    })
}

export const LoginService = {
    login
}