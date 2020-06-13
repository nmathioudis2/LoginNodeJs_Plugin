import {AUTH_ERROR, AUTH_SIGN_UP} from "../actions/types";

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_ERROR:
            console.log('[AuthReducer] got an AUTH_ERROR action!');
            console.log(action.payload.toString())
            return { ...state, errorMessage: action.payload }
        default:
            return state

    }
}