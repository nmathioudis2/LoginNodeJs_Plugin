import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {compose} from "redux";
import {connect} from "react-redux";


import CustomInputDropdown from './CustomInputDropdown'
import * as actions from '../actions'


class PatientData extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(formData){
        console.log('formData', formData);
        await this.props.fetchPatientData(formData)
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset>
                            <Field
                                name="Surname"
                                type="text"
                                id="Surname"
                                label="Select Patient"
                                placeholder=""
                                component={CustomInputDropdown}/>
                        </fieldset>
                        <button type="submit" className='btn btn-primary'> Show Patient</button>
                    </form>
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        patient: state.patientForm.patients
    }
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'getPatient'})
)(PatientData)