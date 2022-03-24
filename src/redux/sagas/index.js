import { spawn } from 'redux-saga/effects'

import commonSaga from "./common-sage";

export default function* rootSaga() {
    yield spawn(commonSaga)
}
