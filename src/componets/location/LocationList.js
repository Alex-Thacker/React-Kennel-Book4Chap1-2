import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class LocationList extends Component {
  render() {
    return (
      <section className="contact">
        <h1>Our Locations</h1>

        {
          this.props.locations.map(location =>
            <section key={location.id}>
              <h4>{location.name}</h4>
              <h5>{location.address}</h5>
              <button onClick={() => this.props.deleteItem("locations", location.id)}>Delete</button>
              <Link to={`/locations/${location.id}`}>Detail</Link>
            </section>
          )
        }

      </section>
    )
  }
}
