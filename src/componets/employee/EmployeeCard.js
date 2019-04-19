import React, { Component } from 'react'

export default class EmployeeCard extends Component {
  render() {
    return (
      <div>
        {this.props.employee.name}
      </div>
    )
  }
}
