import { toast } from "react-toastify"

enum ALL_ERRORS {
    AUTH_USER_NOT_FOUND = "auth/user-not-found",
    AUTH_WRONG_PASSWORD = "auth/wrong-password",
    AUTH_TOO_MANY_REQUEST = "auth/too-many-requests",
    EMAIL_EXISTS = "auth/email-already-in-use"
}

export const authErrorMessage = (code: string): void => {
    let message: string
    switch (code) {
        case ALL_ERRORS.AUTH_USER_NOT_FOUND:
            message = 'User not found, please try with other user.'
            break
        case ALL_ERRORS.AUTH_WRONG_PASSWORD:
            message = 'Wrong password, please try again.'
            break
        case ALL_ERRORS.AUTH_TOO_MANY_REQUEST:
            message = 'Access to this account has been temporarily disabled due to many failed login attempts. Please try again later.'
            break
        default:
            message = 'Something wrong occurred.'
            break
    }
    toast.error(message)
}