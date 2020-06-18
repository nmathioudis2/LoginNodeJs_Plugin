import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, AUTH_SIGN_IN,DASHBOARD_GET_DATA,PATIENT_SIGN_UP,PATIENT_SIGN_UP_ERROR,PATIENT_GET_LIST} from "./types";


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
            payload:''
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
            // localStorage.setItem('NAME', res.data.secret.name);
            // console.log(res.data.secret.name);
            // localStorage.setItem('SURNAME', res.data.secret.surname);
            // console.log(res.data.secret.surname);
            // localStorage.setItem('STAFF', res.data.secret.staff);
            // localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch(err) {
            console.error('err', err)
        }
    }
};




//here we create action -> dispatch -> middleware -> reducer
export const patientSignUp = data => {
    return async dispatch => {
        try{
            const res = await axios.post('http://localhost:5000/patient/signupPatient',data);
            console.log('res',res);

            dispatch({
             type: 'PATIENT_SIGN_UP'  ,
             payload: res.data
            });

            localStorage.setItem('data',res.data);


        }catch (error) {
            dispatch({
                type:PATIENT_SIGN_UP_ERROR,
                payload:'Enter correct data or data format'
            });
            console.log('error',error);
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

            var test = res.data.patients;
            console.log('test',test);
            localStorage.removeItem('PATIENTLIST');
            localStorage.setItem('PATIENTLIST', JSON.stringify(test));
            console.log('local',JSON.parse(localStorage.getItem('PATIENTLIST')));
            var test2=JSON.parse(localStorage.getItem('PATIENTLIST'));
            console.log('test2',test2);

            // localStorage.setItem('NAME', res.data.secret.name);
            // console.log(res.data.secret.name);
            // localStorage.setItem('SURNAME', res.data.secret.surname);
            // console.log(res.data.secret.surname);
            // localStorage.setItem('STAFF', res.data.secret.staff);
            // localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch(err) {
            console.error('err', err)
        }
    }
};



export const saveIamge = () => {

};