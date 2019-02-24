import { reject } from "q";
import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import http from '../../utils/config/http';
import { API_USER_ALL } from "../../utils/consts/api";

export function* getAllUsersSaga() {
    try {
        const resp = yield http.get(API_USER_ALL);
        yield put(actions.setAllUsers(resp.data));
    } catch (error) {
        reject(error);
    }
}