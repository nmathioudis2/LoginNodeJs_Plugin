import {PATIENT_SIGN_UP,PATIENT_SIGN_UP_ERROR, PATIENT_GET_LIST, SAVE_JOB_IMAGE} from '../actions/types'

const DEFAULT_STATE = {
    correctPatientSyntax: false,
    patients:'',
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case PATIENT_SIGN_UP:
            console.log('we are correct');
            return{ ...state, correctPatientSyntax:true, errorMessage:''};
        case PATIENT_SIGN_UP_ERROR:
            console.log('we have error');
            return{ ...state, errorMessage:action.payload};
        case PATIENT_GET_LIST :
            console.log('Lets fetch the list of patients');
            return {...state,patients: action.payload};
        case SAVE_JOB_IMAGE:
            console.log("saving patient's image");
            return {...state};
        default:
            return state
    }
}