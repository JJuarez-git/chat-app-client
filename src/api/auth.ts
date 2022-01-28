import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { GLOBALS } from "../globals"
import axios from "axios";
import { firebaseApp } from '../firebase';
import UserService from '../services/UserService';

const auth = getAuth(firebaseApp)
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