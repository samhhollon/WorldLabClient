import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import React, { Component } from 'react'
import Proposal from './Proposal'

class ProposalList extends Component {
  render() {
    if (this.props.getProposalsQuery && this.props.getProposalsQuery.loading) {
        return <div className="text-white">Loading</div>
    }

    if (this.props.getProposalsQuery && this.props.getProposalsQuery.error) {
        return <div className="text-white">Error</div>
    }

    const proposalsToRender = this.props.getProposalsQuery.getProposals.proposals

    return (
        <div className="row">
            <div className="col s12 m4">
                <div className="card grey darken-2">
                    <div className="card-content">
                        <span className="card-title">Proposals</span>
                        <ul>
                            {proposalsToRender.map(proposal => <Proposal key={proposal.id} proposal={proposal} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const PROPOSAL_QUERY = gql`
    query GetProposalsQuery {
        getProposals {
            proposals {
                id
                topic
                content
                user {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`
export default graphql(PROPOSAL_QUERY, { name: 'getProposalsQuery' }) (ProposalList)