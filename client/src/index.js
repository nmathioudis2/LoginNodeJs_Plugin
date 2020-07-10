import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Home from './components/Home'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard'
import reducers from './reducers/index';
import Camera from './components/camera';
import Patients from './components/Patients';
import PatientData from './components/PatientData';
import AddPatientEvent from './components/AddPatientEvent';
import AddEvent from './components/AddEvent';
import Rules from './components/Rules';
import Statistics from './components/Statistics';
import Chart from './components/Chart';


import authGuard from './components/HOCs/authGuard';
import authGuardAdmin from './components/HOCs/AuthGuardAdmin';
import authGuardSecretary from './components/HOCs/AuthGuardSecretary';
import AuthGuardSecurity from './components/HOCs/AuthGuardSecurity';

const jwtToken =localStorage.getItem('JWT_TOKEN');
console.log(jwtToken);
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
    <Provider store = {createStore(reducers, {
        auth:{
            token: jwtToken,
            isAuthenticated: !!jwtToken
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signup" component={authGuardAdmin(SignUp)}/>
                <Route exact path="/dashboard" component={authGuard(Dashboard)}/>
                <Route exact path="/camera" component={authGuard(Camera)}/>
                <Route exact path="/patients" component={authGuardSecretary(Patients)}/>
                <Route exact path="/patientData" component={authGuard(PatientData)}/>
                <Route exact path="/addPatientEvent" component={authGuard(AddPatientEvent)}/>
                <Route exact path="/addEvent" component={authGuard(AddEvent)}/>
                <Route exact path="/rules" component={AuthGuardSecurity(Rules)}/>
                <Route exact path="/statistics" component={authGuard(Statistics)}/>
                <Route exact path="/charts" component={authGuard(Chart)}/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
