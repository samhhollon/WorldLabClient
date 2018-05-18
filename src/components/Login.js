import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

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
    const { name, email, password } = this.state
    if (this.state.login) {
      const result = await this.props.loginMutation({
        variables: {
          email,
          password,
        },
      })
      const { token } = result.data.login
      this._saveUserData(token)
    } else {
      const result = await this.props.signupMutation({
        variables: {
          name,
          email,
          password,
        },
      })
      const { token } = result.data.signup
      this._saveUserData(token)
    }
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
)(Login)