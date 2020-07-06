import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {compose} from "redux";
import {connect} from "react-redux";


import CustomInputDropdown from './CustomInputDropdown'
import * as actions from '../actions'
import CustomTablePatientList from "./CustomTablePatientList";


class PatientData extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showPatientEvents: false
        }
    }

    _showPatientEvents = (bool) => {
        this.setState({
            showPatientEvents: bool
        });
    };

    async onSubmit(formData) {
        console.log('formData', formData);
        await this.props.fetchPatientData(formData)
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <div className="row mt-3">
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
                            <button onClick={this._showPatientEvents.bind(null, true)} type="submit"
                                    className='btn btn-primary'> Show Patient
                            </button>
                            <button onClick={this._showPatientEvents.bind(null, false)} type="submit"
                                    className='btn btn-primary'> Show
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row ">
                    <div className='col'>
                        {this.state.showPatientEvents && (<CustomTablePatientList/>)}
                    </div>
                </div>
            </div>

        )
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