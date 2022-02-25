import { toast } from "react-toastify"

enum ALL_ERRORS {
    AUTH_USER_NOT_FOUND = "auth/user-not-found",
    AUTH_WRONG_PASSWORD = "auth/wrong-password"
}

export const authErrorMessage = (code: string): void => {
    if (code === ALL_ERRORS.AUTH_USER_NOT_FOUND) {
        toast.error('User not found, please try with other user.')
    }

    if (code === ALL_ERRORS.AUTH_WRONG_PASSWORD) {
        toast.error('Wrong password, please try again.')
    }
}