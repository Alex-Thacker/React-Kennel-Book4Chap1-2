import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Our Locations</h1>
        
          {
        this.props.locations.map(location =>
          <section key = {location.id}>
          <h4>{location.name}</h4>
          <h5>{location.address}</h5>
          </section>
        )
          }
      
      </React.Fragment>
    )
  }
}
