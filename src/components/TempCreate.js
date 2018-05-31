import React, { Component } from 'react'

export default class CreateProposal extends Component {
  render() {
    return (
        <div className="card grey darken-2">
        <div className="card-content">
            <span className="card-title">{this.props.title}</span>
            <input
                className="input-field white-text"
                type="text"
                placeholder="Topic"
            />
            <input
                className="input-field white-text"
                type="text"
                placeholder="Content"
            />
        </div>
        <div className="card-action">
            <button className="btn">Submit</button>
        </div>
        </div>
    )
  }
}