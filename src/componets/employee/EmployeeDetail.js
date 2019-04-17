import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
    state = {
        disable: false
    }

  render() {
    return (
      <div className="contact">
        <p>{this.props.employee.name}</p>
        <button onClick={
            () => {
                this.setState(
                    { disable: true },
                    () => this.props.deleteItem("employees", this.props.employee.id)
                )
            }
        }
        disabled = {this.state.disable}>Delete</button>
      </div>
    )
  }
}
