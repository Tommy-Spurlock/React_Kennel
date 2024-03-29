import React, { Component } from 'react'
import worker from './employee.png'
import "./Employee.css"
import { Link } from "react-router-dom";
import EmployeeCard from './EmployeeCard';


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>

                    <EmployeeCard key={employee.id} employee={employee} {...this.props} />






                    // <div key={employee.id} className="card card--employee">
                    //     <div className="card-body">
                    //         <h5 className="card-title">
                    //             <img src={worker} className="icon--employee" />
                    //             {employee.name}
                    //             <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                    //         <a href="#"
                    //             onClick={() => this.props.deleteEmployee(employee.id)}
                    //             className="card-link">Delete</a>
                    //         </h5>

                    //         <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                    //         <div className="animals--caretaker">
                    //         {
                    //             this.props.animals
                    //                 .filter(anml => anml.employeeId === employee.id)
                    //                 .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                    //         }
                    //         </div>

                    //     </div>
                    // </div>
                )
            }
            </section>
        )
    }
}