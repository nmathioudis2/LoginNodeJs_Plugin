import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {compose} from "redux";
import {connect} from "react-redux";

import CustomInputDropdown from './CustomInputDropdown'
import * as actions from '../actions'


class PatientData extends Component {


    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <fieldset>
                            <Field
                                name="Surname"
                                type="text"
                                id="Surname"
                                label="Select Patient"
                                placeholder=""
                                component={CustomInputDropdown}/>
                        </fieldset>
                    </form>
                </div>
            </div>)
    }
}


export default compose(
    connect(null, actions),
    reduxForm({form: 'patientData'})
)(PatientData)