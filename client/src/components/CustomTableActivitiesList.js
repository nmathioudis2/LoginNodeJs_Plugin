import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";


class CustomTableActivitiesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: [
                {Activity: '1', Coordinator: '1'}
            ]
        };

    }


    async componentDidMount() {
        await this.props.fetchActivity();
        this.setState({activity: this.props.activity});
    };


    renderTableHeader(req, res, next) {
        let header = Object.keys(this.state.activity[0]);

        return header.map((key, index) => {
            return <th className="alert alert-primary" key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.activity.map((events, index) => {
            const {Activity, Coordinator} = events; //destructuring
            return (
                <tr key={Activity}>
                    <td>{Activity}</td>
                    <td>{Coordinator}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div >
                <h3 id='title'>Activities list</h3>
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
        activity: state.patientForm.activity
    }
}

export default compose(
    connect(mapStateToProps, actions)
)(CustomTableActivitiesList)