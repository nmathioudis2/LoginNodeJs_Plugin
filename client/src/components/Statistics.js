import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import CustomInputDropdown from "./CustomInputDropdown";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import Charts from "./Charts/PieCameraPreference";
import chartsReducer from "../reducers/charts";
import LineChartTimeRecorded from "./Charts/LineChartTimeRecorded";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showPatientLocPref: false.valueOf(),
            showPatientTimeAnalysis: false.valueOf(),
            data: {Camera0: "100", Camera1: "100"},
            dataLine:''
        }

    }

    async onSubmit(formData) {
        await this.props.fetchLineTimeDiagramData(formData)
        await this.props.fetchLocationPreferences(formData);


        this.setState({data: this.props.data});
    }

    _showPatientLocPref = (bool) => {
        this.setState({
            showPatientLocPref: bool
        });
    };

    _showPatientTimeAnalysis = (bool) => {
        this.setState({
            showPatientTimeAnalysis: bool
        });
    };

    render() {
        const {handleSubmit} = this.props;
        const {handleAlternate} = this.props;
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
                            <div className="row mt-3">
                                <div className="col">
                                    <button style={{margin: '5px'}} onClick={this._showPatientLocPref.bind(null, true)}
                                            type="submit"
                                            className='btn btn-primary'> Show Patient Location preferences
                                    </button>
                                </div>
                                <div className='col'>
                                    <button onClick={this._showPatientTimeAnalysis.bind(null, true)} type="submit"
                                            className='btn btn-primary'> Show Patient Time Diagram
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.state.showPatientLocPref && (
                        <div className='col md-auto'>
                            <Charts data={this.props.data}/>
                        </div>
                    )}
                    {this.state.showPatientTimeAnalysis && (
                        <div className='col md-auto'>
                            <div>
                                <LineChartTimeRecorded data={this.props.dataLine}/>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.chartsForm.chartData,
        patient: state.patientForm.patients,
        events: state.patientForm.events,
        dataLine: state.chartsForm.lineData
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'getPatient'})
)(Statistics)