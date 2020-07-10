import {UPDATE_RULES,RULES_ERROR} from '../actions/types'

const DEFAULT_STATE = {
    rulesUpdated: false,
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case UPDATE_RULES:
            return{...state, rulesUpdated: true};
        case RULES_ERROR: {
            return {...state, errorMessage: action.payload};
        }
        default:
            return state
    }
}