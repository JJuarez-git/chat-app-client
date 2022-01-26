import { GLOBALS } from "../globals"
import axios from "axios";

export const signIn = (authData: { username: string, password: string }) => {
    const url = `${GLOBALS.API_URL}/auth`
    return axios.post(url, authData, {responseType: 'json'})
}