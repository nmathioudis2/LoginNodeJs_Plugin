import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";



class CustomInputDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // patients: JSON.parse(localStorage.getItem('PATIENTLIST'))
            patients:[{Name: '', Surname: '', Age: '' , Registered:'',id:'',somethingelse:'' }]
        };

    }

    async componentWillMount() {
        await this.props.getPatientList();
        console.log('eimai sto will')
        this.setState({patients: JSON.parse(localStorage.getItem('PATIENTLIST'))})
        localStorage.removeItem('PATIENTLIST')

    }



    render() {
        let patients = this.state.patients;
        // console.log('astheneis');
        // console.log(patients);
        let optionSurname = patients.map((patient) =>
            <option key={patient.Surname}>{patient.Surname}</option>
        );
        // console.log(optionSurname);
        const  {input: {onChange}} = this.props;
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}> {this.props.label} </label>
                <select
                    name={this.props.name}
                    id={ this.props.id}
                    placeholder={this.props.placeholder}
                    className="form-control"
                    type={ this.props.type}
                    onChange={ onChange }
                >
                    <option> </option>
                  {optionSurname}
                </select>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        patients: state.patientForm.patients
    }
}


export default compose(
    connect(mapStateToProps, actions)
)(CustomInputDropdown)