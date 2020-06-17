import React, {Component} from 'react';

class CustomTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            patients:[
                {patientName: 'John', patientSurname: 'Doe', age: 70, firstEntryDate:'2020/05/17' },
                {patientName: 'Jonas', patientSurname: 'Doe', age: 70, firstEntryDate:'2020/05/17' },
                {patientName: 'Nick', patientSurname: 'Doe', age: 70, firstEntryDate:'2020/05/17' },
                {patientName: 'Nikolas', patientSurname: 'Doe', age: 70, firstEntryDate:'2020/05/17' }
            ]
        }
    }


    renderTableHeader(){
        let header = Object.keys(this.state.patients[0])
        return header.map((key,index)=>{
            return <th className="alert alert-primary" key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.patients.map((patient, index) => {
            const { patientName, patientSurname, age, firstEntryDate } = patient; //destructuring
            return (
                <tr key={patientSurname}>
                    <td>{patientName}</td>
                    <td>{patientSurname}</td>
                    <td>{age}</td>
                    <td>{firstEntryDate}</td>
                </tr>
            )
        })
    }



    render() {
        return(
        <div>
            <h3 id='title'>Patient list</h3>
            <table id='patients'>
                <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
                </tbody>
            </table>
        </div>
        )
    }
}


export default CustomTable