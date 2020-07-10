import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../../actions";



class Charts extends Component {
    constructor(props) {
        super(props)
    }





    render() {
        return (
            <div>
                <div className="row mt-3">
                    <div className="chart">
                        <Pie
                            data={{
                                labels: ['Camera0', 'Camera1'],
                                datasets: [
                                    {
                                        label: 'Camera',
                                        data: this.props.data,
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.6)',
                                            'rgba(54, 162, 235, 0.6)'
                                        ]
                                    }]

                            }

                            }
                            options={{
                                title: {
                                    display: true,
                                    text: 'Location preference',
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}

                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        Total hours recorded {(this.props.data[0] + this.props.data[1])/60}
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        patients: state.patientForm.patients,
        data: state.chartsForm.chartData
    }
}


export default compose(
    connect(mapStateToProps, actions)
)(Charts)