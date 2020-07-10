import React,{Component} from 'react';
import {connect} from "react-redux";


export default (OriginalComponent) => {
    class MixedComponent extends Component {
        constructor(props){
            super(props)
        }

        checkAuth() {
            if(!this.props.isAuth  ||  !this.props.jwtToken || !(this.props.secret.staff === 'Secretary' || this.props.secret.staff === 'Admin')){
                this.props.history.push('/')
            }
        }

        async componentDidMount() {

            //is user authenticated?
            this.checkAuth()
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.checkAuth()
        }

        render() {
            return <OriginalComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuthenticated,
            jwtToken: state.auth.token,
            secret: state.dash.secret
        }
    }

    return connect(mapStateToProps)(MixedComponent);
};

