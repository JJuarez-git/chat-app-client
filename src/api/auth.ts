import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import UserService from '../services/UserService';
import { app } from '../firebaseConf';

const auth = getAuth(app)
// const userService = UserService.instance

export const signIn = (email: string, password: string, cb: VoidFunction) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => cb())
        .catch((error) => {
            console.error(error.code, error.message)
            alert(error.message)
        })
}

export const signUp = (username: string, email: string, password: string, cb: VoidFunction) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => updateProfile(userCredential.user, {displayName: username}))
        .then(() => cb())
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