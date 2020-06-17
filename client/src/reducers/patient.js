import {PATIENT_SIGN_UP,PATIENT_SIGN_UP_ERROR} from '../actions/types'

const DEFAULT_STATE = {
    correctPatientSyntax: false,
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case PATIENT_SIGN_UP:
            console.log('we are correct');
            return{ ...state, correctPatientSyntax:true, errorMessage:'',patientName:action.payload.patientName};
        case PATIENT_SIGN_UP_ERROR:
            console.log('we have error');
            return{ ...state, errorMessage:action.payload};
        default:
            return state
    }
}