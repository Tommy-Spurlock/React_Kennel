import React, { Component } from 'react'
// import EmployeeCard from "../employee/EmployeeCard"



export default class LocationList  extends Component {
    render() {
        return (
            <section className="locations">
                <h1>Store Locations</h1>
                {this.props.locations.map(location =>
                <div>
                    <div key={location.id}>
                        <h4>{location.name}</h4>
                        <p>{location.address}</p>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">Current Employees</h6>
                    <div className="employees--location">
                    {/* {
                        this.props.employees
                            .filter(employee => employee.locationId === location.id)
                            .map(employee => <EmployeeCard key={employee.id} animal={employee} {...this.props} />)
                    } */}
                    </div>
                    </div>

                    )}
            </section>
        );
    }
}
