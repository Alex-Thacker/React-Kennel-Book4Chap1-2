import React, { Component } from 'react'

export default class Owners extends Component {
  render() {
    return (
      <section className="contact">
          {
              this.props.owners.map(owner => 
                <section key={owner.id}>
                    <h4>{owner.name}</h4>
                    <h5>{owner.phoneNumber}</h5>
                </section>
                )
          }
        
      </section>
    )
  }
}
