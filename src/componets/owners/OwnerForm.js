import React, { Component } from 'react'

export default class OwnerForm extends Component {
    state = {
        phoneNumber: "",
        name: ""
    }

    handleChange = event => {
        let newState = {}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    postNewItem = event => {
        event.preventDefault()

        const object = {
            phoneNumber: this.state.phoneNumber,
            name: this.state.name
        }

        this.props.addItem("owners", object)
            .then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <React.Fragment>
                
                <form className="contact">
                    <label>New Owner Name</label>
                    <input type="text" onChange={this.handleChange} id="name" />
                    <label>New Owner Phone Number</label>
                    <input type="text" onChange={this.handleChange} id="phoneNumber" />
                    <button type="submit" onClick={this.postNewItem}>Submit</button>
                </form>

            </React.Fragment>
        )
    }
}
