import {
    SHOW_MODAL,
    HIDE_MODAL, SET_PAGE_BACKGROUND,
} from "../actions/common-actions";

const initialState = {
    modal: false,
    modalType: null,
    pageBackground: {background: '#fff7ef'}
}

export default function CommonReduser(state = initialState, {type, payload}) {
    switch(type) {
        case SHOW_MODAL:
            return {
                ...state,
                modal: true,
                modalType: payload
            };
        case HIDE_MODAL:
            return {
                ...state,
                modal: false,
                modalType: null
            };

        case SET_PAGE_BACKGROUND:
            return {
                ...state,
                pageBackground: payload,
            };

        default:
            return state
    }
}
