import React, { Component } from 'react'
import "./Owner.css"
import nic from "./nicCage.jpg"

export default class Owners extends Component {
  render() {
    return (
      <section className="contact owners">
        {
          this.props.owners.map(owner =>
            <div key={owner.id} className="card">
              <div className="card-body">
                <h4>{owner.name}</h4>
                <h5 className="card-title">{owner.phoneNumber} 
                <img src={nic} className="icon--dog" alt="dog icon" />
                  <button
                    onClick={() => this.props.deleteItem("owners", owner.id)}
                    className="card-link">Delete</button></h5>

              </div>
            </div>
          )
        }

      </section>
    )
  }
}
