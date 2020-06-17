import React, {Component} from 'react'
import {connect} from "react-redux";

class Patients extends Component{
    render() {
        return(
            <div>
                Patients are here
            </div>
        )
    }
}


export default connect()(Patients)