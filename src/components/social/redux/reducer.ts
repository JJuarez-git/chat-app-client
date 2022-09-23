import { SELECT_CONTACT } from "./types";

const initialState = {
    selectedContact: null,
    selectedGroup: null
}

const socialReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_CONTACT:
            return {
                ...state,
                selectedContact: action.payload
            }
        default:
            return state
    }
}

export default socialReducer