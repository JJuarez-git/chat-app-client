import { Observable } from 'rxjs'
import { io, Socket } from 'socket.io-client'

export default class WebSocketService {

    private static _instance: WebSocketService
    public socket: Socket

    private constructor() {
        this.socket = io('http://localhost:5000')
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    public emit(event: string, payload?: any, callback?: Function) {
        this.socket.emit(event, payload, callback)
    }

    public listen(event: string): Observable<any> {
        return new Observable((Subscriber) => {
            this.socket.on(event, (payload) => {
                Subscriber.next(payload)
            })
        })
    }
}