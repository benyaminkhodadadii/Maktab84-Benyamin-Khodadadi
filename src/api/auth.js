import {INSTANCE, LOGIN_URL} from "./constant/constantApi";

export const loginRequest = async (data) => {
    try {
        const response = await INSTANCE.post(LOGIN_URL, data)
        return response.data
    } catch (e) {
        return Promise.reject(e.response.data)
    }
}