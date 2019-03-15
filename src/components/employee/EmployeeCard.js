import React, {Component} from 'react'
import worker from './employee.png'
import "./Employee.css"
import { Link } from "react-router-dom";




export default class EmployeeCard extends Component {

    render() {
        return(
            <div key={this.props.employee.id} className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <img src={worker} className="icon--employee" />
                    {this.props.employee.name}
                    <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                    <a href="#"
                        onClick={() => this.props.fireEmployee(this.props.employee.id)}
                        className="card-link">Fire</a>
                </h5>
            </div>
        </div>


        )

    }
}