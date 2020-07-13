import React, {Component} from 'react';
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../../actions";



class LineChartTimeRecorded extends Component {
    constructor(props) {
        super(props)
    }





    render() {
        return (
            <div>
                <div className="row mt-3">
                    <div className="chart">
                        <LineChart data={this.props.dataLine} />
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        patients: state.patientForm.patients,
        data: state.chartsForm.chartData,
        dataLine: state.chartsForm.lineData
    }
}


export default compose(
    connect(mapStateToProps, actions)
)(LineChartTimeRecorded)