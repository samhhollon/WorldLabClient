import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m4">
          <div className="card grey darken-2">
            <div className="card-content">
              <span className="card-title">{this.state.login ? 'Login' : 'Sign Up'}</span>
                {!this.state.login && (
                  <input
                    className="white-text"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    type="text"
                    placeholder="Your name"
                  />
                )}
                <input
                  className="white-text"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  type="text"
                  placeholder="Your email address"
                />
                <input
                  className="white-text"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Choose a safe password"
                />
                <br/>
                <br/>
                <div className="row">
                  <div
                    className="btn col s4 push-s1 btn"
                    onClick={() => this._confirm()}>
                    {this.state.login ? 'Log in' : 'Sign up'}
                  </div>
                  <div
                    className="btn col s4 push-s2 btn"
                    onClick={() => this.setState({ login: !this.state.login })}
                  >
                    {this.state.login ? 'Sign up' : 'Log in'}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  _confirm = async () => {
    // ... you'll implement this in a bit
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login