import { getAuth } from "firebase/auth";

export default class UserService {

    private static _instance: UserService
    private user: any
    private email: any
    
    private constructor() { }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    public getUser() {
        return this.user
    }

    public setUser(user: any) {
        this.user = user
    }

    public getEmail() {
        return this.email
    }

    public setEmail(email: any) {
        this.email = email
    }
}