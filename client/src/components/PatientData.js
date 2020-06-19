import React, {Component} from 'react';
import CustomTablePatientList from './CustomTablePatientList'

import * as actions from '../actions'

export default class PatientData extends Component {




    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <CustomTablePatientList/>
                    </form>
                </div>



            </div>)
    }
}