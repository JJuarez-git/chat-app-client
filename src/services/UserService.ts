export default class UserService {

    private static _instance: UserService
    private email: any

    private constructor() {
        this.email = ''
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    public getEmail() {
        return this.email
    }

    public setEmail(email: any) {
        this.email = email
    }
}