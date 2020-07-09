import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";



class CustomInputDropdownActivities extends Component {
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



    render() {
        let activites = this.state.activity;
        // console.log('astheneis');
        // console.log(patients);
        let optionActivity = activites.map((activity) =>
            <option key={activity.Activity}>{activity.Activity}</option>
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
                    {optionActivity}
                </select>
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
)(CustomInputDropdownActivities)