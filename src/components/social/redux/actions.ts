import { SELECT_CONTACT } from "./types"

export const selectContact = (contactName: string) => {
    return {
        type: SELECT_CONTACT,
        payload: contactName
    }
}