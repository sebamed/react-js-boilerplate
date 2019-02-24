import { takeEvery, all } from 'redux-saga/effects';

import { USER_GET_ALL } from '../types';
import { getAllUsersSaga } from './user';

export function* watchUsers() {
    yield all([
        takeEvery(USER_GET_ALL, getAllUsersSaga)
    ]);
}