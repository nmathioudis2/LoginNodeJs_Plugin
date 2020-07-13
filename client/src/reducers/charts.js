import {POST_CHART,CHARTS_ERROR,POST_LINE} from '../actions/types'

const DEFAULT_STATE = {
    chartExists: false,
    errorMessage: '',
    chartData: '',
    lineData:''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case POST_CHART:
            return{...state, chartExists: true, chartData: action.payload };
        case POST_LINE:
            return{...state, chartExists: true, lineData: action.payload };
        case CHARTS_ERROR: {
            return {...state, errorMessage: action.payload};
        }
        default:
            return state
    }
}