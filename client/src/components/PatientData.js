import React, {Component} from 'react';
import CustomTable2 from './CustomTablePatientList'

import * as actions from '../actions'

export default class PatientData extends Component {




    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <CustomTable2/>
                    </form>
                </div>



            </div>)
    }
}