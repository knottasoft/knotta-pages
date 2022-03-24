import {
    put,
    takeLatest,
} from 'redux-saga/effects'

import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_MODAL_REQUESTED,
    HIDE_MODAL_REQUESTED,
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_REQUESTED, SET_PAGE_BACKGROUND, SET_PAGE_BACKGROUND_REQUESTED,
} from '../actions/common-actions'

function* showModal({ payload }) {
    yield put({ type: SHOW_MODAL, payload })
}

function* hideModal({ payload }) {
    yield put({ type: HIDE_MODAL, payload })
}

function* setCurrentPage({ payload }) {
    yield put({ type: SET_CURRENT_PAGE, payload })
}

function* setPageBackground({ payload }) {

    yield put({ type: SET_PAGE_BACKGROUND, payload })
}

export default function* commonSaga() {
    yield takeLatest(SET_CURRENT_PAGE_REQUESTED, setCurrentPage)
    yield takeLatest(SET_PAGE_BACKGROUND_REQUESTED, setPageBackground)
    yield takeLatest(SHOW_MODAL_REQUESTED, showModal)
    yield takeLatest(HIDE_MODAL_REQUESTED, hideModal)

}
