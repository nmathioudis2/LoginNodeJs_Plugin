import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import {Field, reduxForm} from "redux-form";
import CustomInputDropdown from "./CustomInputDropdown";
import CustomInput from "./CustomInput";
import CustomInputDropdownActivities from "./CustomInputDropdownActivities";

class AddPatientEvent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData) {
        await this.props.addPatientEvent(formData)

    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <div class="p-3 mb-2 bg-light text-dark">
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
                            <fieldset>
                                <Field
                                    name="Event"
                                    type="text"
                                    id="Event"
                                    label="Enter an activity"
                                    placeholder=""
                                    component={CustomInputDropdownActivities}/>
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="EventDate"
                                    type="date"
                                    id="EventDate"
                                    label="Enter activity date"
                                    placeholder=""
                                    component={CustomInput}/>
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="StartTime"
                                    type="hour"
                                    id="StartTime"
                                    label="Enter activity's starting time"
                                    placeholder=""
                                    component={CustomInput}/>
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="Duration"
                                    type="number"
                                    id="Duration"
                                    label="Enter activity's duration(in hours)"
                                    placeholder=""
                                    component={CustomInput}/>
                            </fieldset>
                            <button type="submit"
                                    className='btn btn-primary'> Add patient activity
                            </button>
                        </form>

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
)(AddPatientEvent)

