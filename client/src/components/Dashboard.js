import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../actions";


class Dashboard extends Component {



    async componentDidMount() {
        await this.props.getSecret();
    }


    render() {
        return (
            <div>
                Welcome!
                <br/>
                <h3>{this.props.secret.staff} {this.props.secret.name} {this.props.secret.surname} </h3>
                <h3>Your email is {this.props.secret.email}</h3>

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