import React, { Component } from 'react';
import { login } from '../actions/user.js'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    console.log("login form submitted")
    this.props.login(this.state)
  }

  render() {
    return(
      <div className="login-form">
        <h2>Login</h2>
        <form onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
          <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="email" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
