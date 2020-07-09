import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        console.log('sign out got called')
        this.props.signOut();
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '30px'}}>
                    <Link className="navbar-brand" to="/">Ευ Ζην</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <ul className=" nav navbar-nav ml-auto">

                            {!this.props.isAuth ?
                                [<li className="nav-item" key="signup">
                                    <Link className="nav-link" to="/signup"> Sign Up</Link>
                                </li>,
                                    <li className="nav-item" key="signin">
                                        <Link className="nav-link" to="/signin"> Sign In</Link>
                                    </li>]
                                : null}

                            {this.props.isAuth ?
                                [<li className="nav-item" key="patients">
                                    <Link className="nav-link" to="/patients"> Patients</Link>
                                </li>,
                                    <li className="nav-item" key="patientData">
                                        <Link className="nav-link" to="/patientData">Patient Data</Link>
                                    </li>,
                                    <li className="nav-item" key="addEvent">
                                        <Link className="nav-link" to="/addEvent" >Add Activities</Link>
                                    </li>,
                                    <li className="nav-item" key="patientAddEvent">
                                        <Link className="nav-link" to="/addPatientEvent" >Add Patient Events</Link>
                                    </li>,
                                    <li className="nav-item" key="rules">
                                        <Link className="nav-link" to="/rules" >Rules</Link>
                                    </li>,
                                    <li className="nav-item" key="signout">
                                        <Link className="nav-link" to="/signout" onClick={this.signOut}> Sign Out</Link>
                                    </li>] : null}


                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated,
        // isSuper: state.auth.isSupervisor
    }
}

export default connect(mapStateToProps, actions)(Header);