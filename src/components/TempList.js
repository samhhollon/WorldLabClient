import React, { Component } from 'react'

export default class TempList extends Component {
    render () {
        return (
            <div className="card grey darken-2 tempList">
                <div className="card-content">
                    <span className="card-title">{this.props.title}</span>
                </div>
            </div>
        )
    }
}