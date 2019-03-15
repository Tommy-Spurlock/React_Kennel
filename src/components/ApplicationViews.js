import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from './animal/AnimalDetail'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './authentication/login'





export default class ApplicationViews extends Component {

        // Check if credentials are in local storage
        isAuthenticated = () => sessionStorage.getItem("credentials") !== null




  componentDidMount() {
    const newState = {}

        AnimalManager.getAll()
        .then(animals => newState.animals = animals)
        .then(EmployeeManager.getAll)
        .then(employees => newState.employees = employees)
        .then(LocationManager.getAll)
        .then(locations => newState.locations = locations)
        .then(OwnerManager.getAll)
        .then(owners => newState.owners = owners)
        .then(() => this.setState(newState))
}

deleteAnimal = id => {
    return AnimalManager.delete(id)
    .then(AnimalManager.getAll)
    .then(animals => this.setState({
        animals: animals
    })
  )
}
deleteOwner = id => {
    return OwnerManager.delete(id)
    .then(OwnerManager.getAll)
    .then(owners => this.setState({
        owners: owners
    })
  )
}
fireEmployee = id => {
    return EmployeeManager.delete(id)
    .then(EmployeeManager.getAll)
    .then(employees => this.setState({
        employees:employees
    }))
}

addEmployee = employee =>
  EmployeeManager.post(employee)
    .then(EmployeeManager.getAll)
    .then(employees =>
      this.setState({
        employees: employees
      })
    );

    addOwner = owner =>
  OwnerManager.post(owner)
    .then(OwnerManager.getAll)
    .then(owners =>
      this.setState({
       owners:owners
      })
    );

addAnimal = animal =>
  AnimalManager.post(animal)
    .then(AnimalManager.getAll)
    .then(animals =>
      this.setState({
        animals: animals
      })
    );


    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    render() {
        return (
            <React.Fragment>

                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    return <LocationList {...props} locations={this.state.locations} employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                       deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
                }} />

        {/* // Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                     return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {

                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} employees={this.state.employees} animals={this.state.animals} fireEmployee={this.state.fireEmployee} />

                        } else {
                                 return <Redirect to="/login" />
                                }
                }} />
                  <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                       addEmployee={this.addEmployee} />
                }} />
                 <Route path="/employees/:employeeId(\d+)" render={(props) => {
                     return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props} owners={this.state.owners} deleteOwner={this.deleteOwner}/>
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                       addOwner={this.addOwner} />
                }} />
                 <Route path="/owners/:ownerId(\d+)" render={(props) => {
                     return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}



// Practice: Kennel Owners List
// If you haven't created the owners array in your state yet, please go ahead and create it now, and populate it with 4 owners. Each owners should have the id, phoneNumber, and name properties.

// Create a link in your navigation bar that links to /owners path.
// Create a route for /owners that renders the <OwnerList> component and sends the corresponding state property.
// Add the code in <OwnerList> to display all the items in the array.