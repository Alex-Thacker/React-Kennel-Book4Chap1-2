import React, { Component } from 'react'

export default class LocationDetail extends Component {
    render() {
        return (
            <div className="contact">
                <h4>{this.props.location.name}</h4>
                <h5>{this.props.location.address}</h5>
                <button onClick={() => this.props.deleteItem("locations", this.props.location.id)}>Delete</button>
            </div>
        )
    }
}
