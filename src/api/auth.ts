import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { GLOBALS } from "../globals"
import axios from "axios";
import UserService from '../services/UserService';
import { app } from '../firebaseConf';

const auth = getAuth(app)
const userService = UserService.instance

export const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => userService.setEmail(userCredential.user))
        .catch((error) => console.error(error.code, error.message))
}

export const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => userService.setEmail(userCredential.user))
        .catch((error) => console.error(error.code, error.message))
}

export const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
        .then(() => console.log("Correo enviado"))
        .catch((error) => console.error(error.code, error.message))
}

export const logOut = () => {
    signOut(auth)
        .then(() => userService.setEmail(null))
        .catch((error) => console.error(error.code, error.message))
}