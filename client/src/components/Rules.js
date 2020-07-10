import React, {Component} from 'react'
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {compose} from 'redux';
import * as actions from "../actions";
import CustomInput from "./CustomInput";


class Rules extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData) {
        await this.props.addRules(formData)
        console.log('edw einai ta data')
        console.log(formData)
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-rules"
                           role="tab"
                           aria-controls="pills-home" aria-selected="true">Rules</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-notifications"
                           role="tab"
                           aria-controls="pills-profile" aria-selected="false">Notifications</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-rules" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <h3>Security check</h3>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <fieldset>
                                        <label htmlFor="status">Set restricted area check status</label>
                                        <Field className="custom-select" name="status" id="status" component="select">
                                            <option>Choose...</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>Inactive</option>
                                        </Field>
                                    </fieldset>
                                </div>
                                <div className="form-group col-md-3">
                                    <fieldset>
                                        <Field
                                            name="sTime"
                                            type="number"
                                            id="sTime"
                                            label="Set start time for Restricted area"
                                            placeholder=""
                                            component={CustomInput}/>
                                    </fieldset>
                                </div>
                                <div className="form-group col-md-3">
                                    <fieldset>
                                        <Field
                                            name="eTime"
                                            type="number"
                                            id="eTime"
                                            label="Set end time for Restricted area"
                                            placeholder=""
                                            component={CustomInput}/>
                                    </fieldset>
                                </div>
                                {this.props.errorMessage ?
                                    <div className="alert alert-danger">
                                        {this.props.errorMessage}
                                    </div> : null}
                                <button type="submit" className='btn btn-primary'> Set security rules</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-notifications" role="tabpanel"
                         aria-labelledby="pills-profile-tab">fasfas
                    </div>
                </div>
            </div>
        );
    };

}


function mapStateToProps(state) {
    return {
        errorMessage: state.rulesForm.errorMessage
    }
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'rulesUpdate'})
)(Rules)
