import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { AUTH_TOKEN } from '../constants'

class Proposal extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <li>
                <div className="card-text section">
                    { authToken && (
                        <span>
                            <button className="btn upVote" onClick={() => this._voteOnProposal()}>
                                <span className="upVoteText">{this.props.proposal.votes.length}</span>
                            </button>
                        </span>
                    )}
                    {this.props.proposal.topic} ({this.props.proposal.content})
                </div>
                <div className="divider"/>
            </li>
        )
    }

    _voteOnProposal = async () => {
        const proposalId = this.props.proposal.id
        await this.props.voteOnProposalMutation({
            variables: {
                proposalId,
            },
        })
    }
}

const VOTE_ON_PROPOSAL_MUTATION = gql`
  mutation VoteOnProposalMutation($proposalId: ID!) {
    voteOnProposal(proposalId: $proposalId) {
      id
      proposal {
        votes {
          id
        }
      }
    }
  }
`

export default graphql(VOTE_ON_PROPOSAL_MUTATION, {
  name: 'voteOnProposalMutation',
})(Proposal)