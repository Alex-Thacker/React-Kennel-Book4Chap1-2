import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import Owners from "./owners/Owners"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
        EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
        LocationManager.getAll()
            .then(locations => newState.locations = locations)
        OwnerManager.getAll()
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }
    

    deleteItem = (resource, id) => {
        return fetch(`http://localhost:5002/${resource}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/${resource}`))
        .then(e => e.json())
        .then(obj => this.setState({
            [resource]: obj
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteItem={this.deleteItem} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteItem={this.deleteItem} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <Owners owners={this.state.owners} deleteItem={this.deleteItem} />
                }} />
            </React.Fragment>
        )
    }
}