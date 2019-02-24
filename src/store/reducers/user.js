import { USER_SET_ALL } from "../types";

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_SET_ALL:
            return { ...state, all: action.users };
        default:
            return state;
    }
}