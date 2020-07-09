import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {compose} from "redux";
import {connect} from "react-redux";


import CustomInputDropdown from './CustomInputDropdown'
import * as actions from '../actions'
import {Link} from "react-router-dom";
// import CustomTablePatientList from "./CustomTablePatientList";
// import CustomTablePatientEvents from "./CustomTablePatientEvents";


class PatientData extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showPatientEvents: false.valueOf(),
            events: [
                {Event: '', EventDate: '', StartTime: '', Duration: ''}]
        }
    }


    renderTableHeader(req, res, next) {
        let header = Object.keys(this.state.events[0]);

        return header.map((key, index) => {
            return <th className="alert alert-primary" key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.events.map((events, index) => {
            const {Event, EventDate, StartTime, Duration} = events; //destructuring
            return (
                <tr key={Event}>
                    <td>{Event}</td>
                    <td>{EventDate}</td>
                    <td>{StartTime}</td>
                    <td>{Duration}</td>
                </tr>
            )
        })
    }


    _showPatientEvents = (bool) => {
        this.setState({
            showPatientEvents: bool
        });
    };

    async onSubmit(formData) {
        await this.props.fetchPatientData(formData)
        this.setState({events: this.props.events})
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
                            <button onClick={this._showPatientEvents.bind(null, true)}  type="submit"
                                    className='btn btn-primary'> Show Patient
                            </button>
                            {/*<button onClick={this._showPatientEvents.bind(null, false)} type="submit"*/}
                            {/*        className='btn btn-primary'> Show*/}
                            {/*</button>*/}
                        </form>
                    </div>
                </div>
                <div className="row ">
                    <div className='col'>
                        {this.state.showPatientEvents && (
                            <div>
                                <h3 id='title'>Latest Events</h3>
                                <table className="table" id='events'>
                                    <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                    </tbody>
                                </table>
                                <Link to="/addevent"><button className='btn btn-primary'>
                                    Add Event</button></Link>
                            </div>)}
                        {console.log(this.state.events)}
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        patient: state.patientForm.patients,
        events: state.patientForm.events
    }
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'getPatient'})
)(PatientData)