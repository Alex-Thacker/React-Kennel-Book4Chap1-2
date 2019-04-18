import React, { Component } from 'react'

export default class EmployeeForm extends Component {
  state = {
    name: ""
  }

  handleChange = event => {
    const newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  postNewItem = event => {
    event.preventDefault()

    const object = {
      name: this.state.name
    }

    this.props.addItem("employees", object)
      .then(() => this.props.history.push("/employees"))
  }

  render() {
    return (
      <React.Fragment>
        <form className="contact">
          <label>New Employee Name</label>
          <input type="text" onChange={this.handleChange} id="name" />
          <button type="submit" onClick={this.postNewItem}>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
