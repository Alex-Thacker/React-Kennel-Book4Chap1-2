import React, { Component } from 'react'
import dog from "./DogIcon.svg"

export default class AnimalDetail extends Component {
    render() {
        return (
            <div className="contact">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} className="icon--dog" alt="dog icon" />
                        {this.props.animal.name}
                        <button
                            onClick={() => this.props.deleteItem("animals", this.props.animal.id)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}
