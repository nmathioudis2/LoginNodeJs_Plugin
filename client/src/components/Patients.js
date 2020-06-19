import React, {Component} from 'react'
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {compose} from 'redux';

import * as actions from '../actions'
import CustomInput from './CustomInput'
import CustomTablePatientList from "./CustomTablePatientList";

class Patients extends Component {
    //constructor in order to use this. with the onSubmit we created
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }



    //create custom method onSubmit
    async onSubmit(data) {
        console.log('Submit got called');
        console.log('data', data);
        //ActionCreator call which contacts the backEnd server-(redux-thunk middleware must be used in main index page in order to be able to cal the actions).
        //Here we call the patientSignUp and assign it to properties of Component(since action has async methods it should also be here async
        //IMPORTANT in order TO USE THIS PROPERTY IN the async onSubmit which we created(and so the patientSignUp)  we first need to bind it. we create the constructor above
        await this.props.patientSignUp(data)


    }





    render() {
        //import handleSubmit inside render as a property
        const {handleSubmit} = this.props;
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <form>
                            <CustomTablePatientList/>
                        </form>
                    </div>
                    <div className="col">
                        <div className="alert alert-primary">
                            <h3>New Patient</h3>
                            {/*on submit method(left) of the form uses the handlesubmit property of redux form and uses the custom onSubmit method we created*/}
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <fieldset>
                                    <Field
                                        name="patientName"
                                        type="text"
                                        id="patientName"
                                        label="Enter patient's first name"
                                        placeholder=""
                                        component={CustomInput}/>
                                </fieldset>
                                <fieldset>
                                    <Field
                                        name="patientSurname"
                                        type="text"
                                        id="patientSurname"
                                        label="Enter patient's Surname"
                                        placeholder=""
                                        component={CustomInput}/>
                                </fieldset>
                                <fieldset>
                                    <Field
                                        name="patientAge"
                                        type="number"
                                        id="patientAge"
                                        label="Patient's age"
                                        placeholder=""
                                        component={CustomInput}/>
                                </fieldset>
                                <fieldset>
                                    <Field
                                        name="firstEntryDate"
                                        type="text"
                                        id="firstEntryDate"
                                        label="Patient's registration date (YYYY/MM/DD)"
                                        placeholder=""
                                        component={CustomInput}/>
                                </fieldset>
                                <button type="submit" className='btn btn-primary'> Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        Selected Patient data
                    </div>
                    <div className="col">
                        Add patient incident
                    </div>
                </div>
            </div>


        )
    }
}

////export page and redux form WITHOUT actions
// export default reduxForm({form: 'patientSignUp'})(Patients)

//export redux form with actions
export default compose(
    connect(null, actions),
    reduxForm({form: 'patientSignUp'})
)(Patients)
