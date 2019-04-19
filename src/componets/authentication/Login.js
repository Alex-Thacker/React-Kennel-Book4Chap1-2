import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        let newState = {} 
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    handleLogin = event => {
        event.preventDefault()
        
        sessionStorage.setItem("valid", 
        JSON.stringify({
            email: this.state.email,
            password: this.state.password 
        })
        )
        this.props.history.push("/")
    }

  render() {
    return (
      <React.Fragment>
          <form className="contact">
              <h1>Login or else!</h1>
              <label>Enter your email or else!</label>
              <input onChange={this.handleChange} id="email" type="email" placeholder="email" />
              <label>Enter your password or else!</label>
              <input onChange={this.handleChange} id="password" type="password" placeholder="password" />
              <button type="submit" onClick={this.handleLogin}>Login or else!</button>
          </form>
        
      </React.Fragment>
    )
  }
}
