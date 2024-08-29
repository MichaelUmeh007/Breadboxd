import axios from "./axios";

AUTH_URL = "/api/v1/auth"

export const register = async (credentails) => {
    const response = await axios.post("${AUTH_URL}/register", credentails)
}