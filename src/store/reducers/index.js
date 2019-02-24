import { combineReducers } from "redux";
import { userReducer } from "./user";

const appReducer = combineReducers({
    user: userReducer
});

export default appReducer;