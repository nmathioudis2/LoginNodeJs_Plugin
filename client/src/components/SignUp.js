import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions/index'
import CustomInput from './CustomInput'


class SignUp extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData){
        console.log('formData', formData);
        //Action Creator
        await this.props.signUp(formData);
        if(!this.props.errorMessage){
            this.props.history.push('/dashboard');
        }

    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset>
                            <Field
                                name="email"
                                type="text"
                                id="email"
                                label="Enter your email"
                                placeholder="example@example.com"
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="password"
                                type="password"
                                id="password"
                                label="Enter password"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>
                        <fieldset>
                            <Field
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                label="Validate password"
                                placeholder=""
                                component={CustomInput}/>
                        </fieldset>


                        { this.props.errorMessage ?
                            <div className="alert alert-danger">
                                { this.props.errorMessage }
                            </div> : null }

                        <button type="submit" className='btn btn-primary'> Sign Up</button>
                    </form>

                </div>
                <div className="col">
                    <div className="center">
                        <div className="alert alert-primary">
                            <p>Η μονάδα φροντίδας ηλικιωμένων «Ευ Ζην» στον Πειραιά αποτελεί πρότυπο κέντρο φιλοξενίας
                                και περιποίησης ατόμων τρίτης ηλικίας η οποία λειτουργεί από το 1998 με άδεια από τη
                                Νομαρχία Πειραιά και είναι μέλος της Πανελλήνιας Ένωσης Μονάδων Φροντίδας Ηλικιωμένων
                                (ΠΕΜΦΗ).</p>
                            <p>Στόχος μας είναι η εξυπηρέτηση, περίθαλψη και η φροντίδα ηλικιωμένων ατόμων,
                                διασφαλίζοντας την ευημερία των ηλικιωμένων και το σεβασμό της προσωπικότητας τους σε
                                ένα περιβάλλον ζεστό και φιλόξενο δίνοντας ιδιαίτερη σημασία στην ατομικότητα, ασφάλεια,
                                ανεξαρτησία και αξιοπρέπεια τους, καθώς και στις ιδιαίτερες ανάγκες τους.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signup'})
)(SignUp)

