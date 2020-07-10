import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import dashboardReducer from './dashboard';
import patientReducer from './patient';
import rulesReducer from './rules'

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    dash: dashboardReducer,
    patientForm: patientReducer,
    rulesForm: rulesReducer
});