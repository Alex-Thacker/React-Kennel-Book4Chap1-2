import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import Owners from "./owners/Owners"
import AnimalManager from "../modules/AnimalManager"
// import LocationManager from "../modules/LocationManager"
// import EmployeeManager from "../modules/EmployeeManager"
// import OwnerManager from "../modules/OwnerManager"
import { withRouter } from "react-router"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalDetail from "./animals/AnimalDetail"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owners/OwnerForm"
import Login from "./authentication/Login"

class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll("animals")
            .then(animals => newState.animals = animals)
            .then(() => AnimalManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => AnimalManager.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() => AnimalManager.getAll("owners"))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }


    deleteItem = (resource, id) => AnimalManager.deleteItem(resource, id)
        .then(() => fetch(`http://localhost:5002/${resource}`))
        .then(e => e.json())
        .then(obj => {
            if (resource === "locations") {
                this.props.history.push("/")
            } else {
                this.props.history.push(`/${resource}`)
            }
            this.setState({ [resource]: obj })
        })

    addItem = (resource, object) => AnimalManager.postItem(resource, object)
        .then(() => AnimalManager.getAll(resource))
        .then(obj => {
            this.setState({ [resource]: obj })
        })

    isLogin = () => sessionStorage.getItem("valid") !== null


    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={(props) => {
                    return <Login {...props} />
                }} />
                <Route exact path="/" render={(props) => {
                    if(this.isLogin()) {
                        return <LocationList locations={this.state.locations} deleteItem={this.deleteItem} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if(this.isLogin()){
                        return <AnimalList animals={this.state.animals} deleteItem={this.deleteItem} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if(this.isLogin()) {
                        return <EmployeeList employees={this.state.employees} deleteItem={this.deleteItem} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners" render={(props) => {
                    if(this.isLogin()){
                        return <Owners owners={this.state.owners} deleteItem={this.deleteItem} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    return <EmployeeDetail employee={employee} deleteItem={this.deleteItem} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    return <LocationDetail location={location} deleteItem={this.deleteItem} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    return <AnimalDetail animal={animal} deleteItem={this.deleteItem} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm addItem={this.addItem} {...props} />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm addItem={this.addItem} {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)