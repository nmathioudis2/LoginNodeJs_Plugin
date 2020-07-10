import axios from 'axios';
import {
    AUTH_SIGN_UP,
    AUTH_ERROR,
    AUTH_SIGN_OUT,
    AUTH_SIGN_IN,
    DASHBOARD_GET_DATA,
    PATIENT_SIGN_UP,
    PATIENT_SIGN_UP_ERROR,
    PATIENT_GET_LIST,
    SAVE_JOB_IMAGE,
    GET_PATIENT_ID,
    GET_PATIENT_DATA,
    ADD_PATIENT_EVENT,
    ADD_ACTIVITY,
    GET_ACTIVITY,
    UPDATE_RULES,
    RULES_ERROR,
    POST_CHART,
    CHARTS_ERROR
} from "./types";
import React from "react";


export const signUp = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signup', data);
            console.log('res', res);
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });

            localStorage.setItem('NAME', res.data.name);
            console.log(res.data.name);
            localStorage.setItem('SURNAME', res.data.surname);
            localStorage.setItem('STAFF', res.data.staff);
            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Enter correct data '
            })
        }
    };
};

export const signOut = () => {
    return dispatch => {
        axios.defaults.headers.common['Authorization'] = "";
        localStorage.removeItem('JWT_TOKEN');
        localStorage.removeItem('NAME');
        localStorage.removeItem('SURNAME');
        localStorage.removeItem('STAFF');
        localStorage.removeItem('JWT_TOKEN');
        localStorage.removeItem('PATIENTLIST');
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    };
};

export const signIn = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signin', data);
            console.log('res', res);
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.token
            });
            localStorage.setItem('JWT_TOKEN', res.data.token);
            localStorage.setItem('NAME', res.data.name);
            // console.log(res.data.name);
            localStorage.setItem('SURNAME', res.data.surname);
            localStorage.setItem('STAFF', res.data.staff);
            axios.defaults.headers.common['Authorization'] = res.data.token;
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Enter correct mail and password'
            })
        }
    };
};

export const getSecret = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:5000/users/secret');
            dispatch({
                type: DASHBOARD_GET_DATA,
                payload: res.data.secret
            });
        } catch (err) {
            console.error('err', err)
        }
    }
};


//here we create action -> dispatch -> middleware -> reducer
export const patientSignUp = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/patient/signupPatient', data);
            console.log('res', res);
            dispatch({
                type: PATIENT_SIGN_UP,
                payload: res.data.newPatient
            });
            localStorage.setItem('PatientSurname', res.data.newPatient.Surname);
        } catch (error) {
            dispatch({
                type: PATIENT_SIGN_UP_ERROR,
                payload: 'Enter correct data or data format'
            });
            localStorage.removeItem('PatientSurname');
            console.log('error', error);
        }
    }
};


export const getPatientList = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:5000/patient/fetchPatientList');
            dispatch({
                type: PATIENT_GET_LIST,
                payload: res.data.patients
            });
            console.log(res.data.patients);
            localStorage.setItem('PATIENTLIST', JSON.stringify(res.data.patients));
        } catch (err) {
            console.error('err', err)
        }
    }
};


export const saveJobImage = data => {
    return async dispatch => {

        try {
            const res = await axios.post('http://localhost:5000/patient/updatePatient', data);
            dispatch({
                type: SAVE_JOB_IMAGE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Something went terribly wrong '
            })
        }
    };
};

export const fetchPatientData = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/patient/fetchPatientEvents', data)
            console.log(res.data[0])
            dispatch({
                type: GET_PATIENT_DATA,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Something went terribly wrong '
            })
        }
    }
};


export const addPatientEvent = data => {
    return async dispatch => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:5000/patient/addPatientEvent', data)
            dispatch({
                type: ADD_PATIENT_EVENT,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Something went terribly wrong '
            })
        }
    }
};

export const addActivity = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/patient/addActivity', data)
            dispatch({
                type: ADD_ACTIVITY,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Something went terribly wrong '
            })
        }
    }
};

export const fetchActivity = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:5000/patient/fetchActivities');
            console.log(res.data.activities);
            dispatch({
                type: GET_ACTIVITY,
                payload: res.data.activities
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Something went terribly wrong '
            })
        }
    }
};

export const addRules = data => {
    return async dispatch => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:5000/rules/addRules', data);

            console.log(res)
            dispatch({
                type: UPDATE_RULES,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: RULES_ERROR,
                payload: ' You must select between active and inactive'
            })

        }
    }
};

export const fetchLocationPreferences = data => {
    return async dispatch => {
        try {
            // console.log(data);
            const res = await axios.post('http://localhost:5000/charts/pieChartLocationPreference', data);

            // console.log(res);
            // console.log(res.data.patientCameraPrefs);
            let {Camera0, Camera1} = res.data.patientCameraPrefs[0];
            let resData = [parseInt(Camera0,10), parseInt(Camera1,10)];
            // console.log(resData);
            // console.log('camera0 ' + Camera0);
            // console.log('camera1 ' + Camera1);
            dispatch({
                type: POST_CHART,
                payload: resData
            });
        } catch (error) {
            dispatch({
                type: CHARTS_ERROR,
                payload: ' You must select between active and inactive'
            })

        }
    }
};