import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import CustomInputDropdown from "./CustomInputDropdown";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import Charts from "./Charts/PieCameraPreference";
import chartsReducer from "../reducers/charts";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showPatientEvents: false.valueOf(),
            data: {Camera0: "100", Camera1: "100"}
        }

    }

    async onSubmit(formData) {
        await this.props.fetchLocationPreferences(formData);
        this.setState({data: this.props.data});
        // console.log('meta to onSubmit afou kalesa sunartisi')
        // console.log(this.state.data)
    }

    _showPatientEvents = (bool) => {
        this.setState({
            showPatientEvents: bool
        });
    };

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
                                    className='btn btn-primary'> Show Patient Location preferences
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className='col'>
                        {this.state.showPatientEvents && (
                            <div>
                                <Charts data={this.props.data}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.chartsForm.chartData,
        patient: state.patientForm.patients,
        events: state.patientForm.events
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'getPatient'})
)(Statistics)