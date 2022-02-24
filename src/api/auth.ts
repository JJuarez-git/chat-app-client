import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import UserService from '../services/UserService';
import { app } from '../firebaseConf';
import axios from "axios";
import { toast } from "react-toastify";

const auth = getAuth(app)
// const userService = UserService.instance

export const signIn = (email: string, password: string, callback: VoidFunction) => {
    return signInWithEmailAndPassword(auth, email, password)
        // .then(() => axios.post())
        .then(() => callback())
        .catch(err => toast.error(err.message));
}

export const signUp = (username: string, email: string, password: string, callback: VoidFunction) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => updateProfile(userCredential.user, { displayName: username }))
        .then(() => callback())
        .catch((error) => console.error(error.code, error.message))
}

export const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
        .then(() => console.log("Correo enviado"))
        .catch((error) => console.error(error.code, error.message))
}

export const logOut = (cb: VoidFunction) => {
    signOut(auth)
        .then(() => cb())
        .catch((error) => console.error(error.code, error.message))
}