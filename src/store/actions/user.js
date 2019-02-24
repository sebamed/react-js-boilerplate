import { USER_GET_ALL, USER_SET_ALL } from "../types";

export const getAllUsers = () => {
    return { type: USER_GET_ALL }
}

export const setAllUsers = (users) => {
    return {
        type: USER_SET_ALL,
        users
    }
}