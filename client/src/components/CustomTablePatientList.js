import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";


class CustomTablePatientList extends Component{


    constructor(props){
        super(props);
        this.state = {
            patients:JSON.parse(localStorage.getItem('PATIENTLIST'))
        };
        console.log('state',this.state.patients)
    }


    async componentDidMount() {
        await this.props.getPatientList();
    }

    renderTableHeader(){
        let header = Object.keys(this.state.patients[0]);
        return header.map((key,index)=>{
            return <th className="alert alert-primary" key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.patients.map((patient, index) => {
            const { patientName, patientSurname, age, firstEntryDate } = patient; //destructuring
            return (
                <tr key={patientSurname}>
                    <td>{patientName}</td>
                    <td>{patientSurname}</td>
                    <td>{age}</td>
                    <td>{firstEntryDate}</td>
                </tr>
            )
        })
    }



    render() {
        return(
            <div>
                <h3 id='title'>Patient list</h3>
                <table id='patients'>
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
        data: state.patientForm.patientList
    }
}

export default connect(mapStateToProps, actions)(CustomTablePatientList);