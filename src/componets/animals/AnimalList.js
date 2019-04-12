import React, { Component } from 'react'

export default class AnimalList extends Component {
  render() {
    return (
        <section className="contact">
        {
            this.props.animals.map(animal => 
                <section key = {animal.id}>
                <h4>{animal.name}</h4>
                <h5>{animal.type}</h5>
                </section>
                )
        }
        </section>
    )
  }
}
