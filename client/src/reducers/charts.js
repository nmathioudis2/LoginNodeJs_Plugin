import {POST_CHART,CHARTS_ERROR} from '../actions/types'

const DEFAULT_STATE = {
    chartExists: false,
    errorMessage: '',
    chartData: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case POST_CHART:
            return{...state, chartExists: true, chartData: action.payload };
        case CHARTS_ERROR: {
            return {...state, errorMessage: action.payload};
        }
        default:
            return state
    }
}