import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import {Field, reduxForm} from "redux-form";
import CustomInputDropdown from "./CustomInputDropdown";
import CustomInput from "./CustomInput";

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData) {
        // await this.props.fetchPatientData(formData)

    }

    _showPatientEvents = (bool, int) => {
        this.setState({
            showPatientEvents: bool
        });
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="row mt-3">
                <div className="col">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset>
                            <Field
                                name="activity"
                                type="text"
                                id="activity"
                                label="Enter an activity"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="actovityDate"
                                type="date"
                                id="date"
                                label="Enter activity date"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="actovityStartingTime"
                                type="hour"
                                id="sTime"
                                label="Enter activity's starting time"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="duration"
                                type="number"
                                id="duration"
                                label="Enter activity's duration(in hours)"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="Surname"
                                type="text"
                                id="Surname"
                                label="Select Patient"
                                placeholder=""
                                component={CustomInputDropdown}/>
                        </fieldset>
                        <button type="submit"
                                className='btn btn-primary'> Show Patient
                        </button>
                    </form>

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
)(AddEvent)

