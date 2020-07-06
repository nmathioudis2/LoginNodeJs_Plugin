import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";


class CustomTablePatientList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // patients: JSON.parse(localStorage.getItem('PATIENTLIST'))
            patients:[
                {Name: '', Surname: '', Age: '' , Registered:'',id:'',somethingelse:'' }
            ]
        };

    }


    async componentWillMount() {
        await this.props.getPatientList();
        // this.state = {
        // patients: JSON.parse(localStorage.getItem('PATIENTLIST'))
        this.setState({patients: JSON.parse(localStorage.getItem('PATIENTLIST'))})
    };


    renderTableHeader(req,res,next) {


        let header = Object.keys(this.state.patients[0]);

        return header.map((key, index) => {
            return <th className="alert alert-primary"   key={index}>{key.toUpperCase()}</th>
        })
    }


    renderTableData() {
        return this.state.patients.map((patient, index) => {
            const {Name, Surname, Age, Registered} = patient; //destructuring
            return (
                <tr key={Surname}>
                    <td>{Name}</td>
                    <td>{Surname}</td>
                    <td>{Age}</td>
                    <td>{Registered}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div >
                <h3 id='title'>Patient list</h3>
                <table className="table" id='patients'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
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
)(CustomTablePatientList)