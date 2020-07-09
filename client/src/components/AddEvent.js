import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import {Field, reduxForm} from "redux-form";
import CustomInput from "./CustomInput";
import CustomTableActivitiesList from './CustomTableActivitiesList.js'

class AddPatientEvent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showActivities: false.valueOf(),
        }
    }

    async onSubmit(formData) {
        await this.props.addActivity(formData)

    }



    _showActivities = (bool) => {
        this.setState({
            showActivities: bool
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
                                    name="Activity"
                                    type="text"
                                    id="Activity"
                                    label="Enter an activity"
                                    placeholder=""
                                    component={CustomInput}/>
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="Coordinator"
                                    type="text"
                                    id="Coordinator"
                                    label="Enter coordinator"
                                    placeholder=""
                                    component={CustomInput}/>
                            </fieldset>
                            <button type="submit"
                                    className='btn btn-primary'> Add Activity
                            </button>
                            <button onClick={this._showActivities.bind(null, true)}  className='btn btn-primary'>
                                Show Activities
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.showActivities && (
                <div className="row mt-3">
                    <div className="col">
                        <form>
                            <CustomTableActivitiesList/>
                        </form>
                    </div>
                </div>)}
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
    connect(mapStateToProps, actions),
    reduxForm({form: 'getPatient'})
)(AddPatientEvent)

