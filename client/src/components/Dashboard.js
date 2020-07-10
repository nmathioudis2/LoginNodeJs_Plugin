import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field} from "redux-form";

import * as actions from "../actions";
import CustomInput from "./CustomInput";
import profileImage from "../images/profile_image.png"


class Dashboard extends Component {


    async componentDidMount() {
        await this.props.getSecret();
    }


    render() {
        return (
            <div>
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">User Profile</h1>
                    </div>
                </div>
                <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-general"
                           role="tab"
                           aria-controls="pills-home" aria-selected="true">General</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-calendar"
                           role="tab"
                           aria-controls="pills-profile" aria-selected="false">Calendar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-business-info"
                           role="tab"
                           aria-controls="pills-profile" aria-selected="false">Company Info</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-general" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <h2>Personal Information</h2>
                        <div className="row mt-3">
                            <div className="col">
                                <img src={profileImage} style={{width: 270, height: 250}}/>
                            </div>
                            <div className="col">
                                <p>
                                    <a className="text-left" className="font-weight-bold"> Title: </a>
                                    <a>{this.props.secret.staff}</a>
                                </p>
                                <p>
                                    <a className="text-left" class="font-weight-bold"> Email: </a>
                                    <a>{this.props.secret.email}</a>
                                </p>
                                <p>
                                    <a className="text-left" className="font-weight-bold"> Name: </a>
                                    <a>{this.props.secret.name} {this.props.secret.surname}</a>

                                </p>


                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-calendar" role="tabpanel"
                         aria-labelledby="pills-profile-tab">fasfas
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        secret: state.dash.secret
    }
}

export default connect(mapStateToProps, actions)(Dashboard);