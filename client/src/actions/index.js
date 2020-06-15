import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, AUTH_SIGN_IN,DASHBOARD_GET_DATA} from "./types";


export const signUp = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://192.168.1.1:5000/users/signup', data);
            console.log('res', res);

            dispatch({
                type: AUTH_SIGN_UP,
                payload: 'res.data.token'
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: ' Email is already in use'
            })
        }
    };
};

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        dispatch({
            type: AUTH_SIGN_OUT,
            payload:''
        })
    };
};

export const signIn = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://192.168.1.1:5000/users/signin', data);
            console.log('res', res);

            dispatch({
                type: AUTH_SIGN_IN,
                payload: 'res.data.token'
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
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
            })

        } catch(err) {
            console.error('err', err)
        }
    }
}