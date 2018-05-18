import React, { Component } from 'react'

export default class Proposal extends Component {
    render() {
        return (
            <li>
                <div className="card-text section">
                    {this.props.proposal.topic} ({this.props.proposal.content})
                </div>
                <div className="divider"/>
            </li>
        )
    }

    _voteOnProposal = async () => {
        //Add voteOnLink mutation
    }
}