import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateProposal extends Component {
  state = {
    topic: '',
    content: '',
  }

  render() {
    return (
        <div className="row">
            <div className="col s12 m4">
              <div className="card grey darken-2">
                <div className="card-content">
                  <span className="card-title">Make Proposal</span>
                  <input
                      className="input-field white-text"
                      value={this.state.topic}
                      onChange={e => this.setState({ topic: e.target.value })}
                      type="text"
                      placeholder="Topic"
                  />
                  <input
                      className="input-field white-text"
                      value={this.state.content}
                      onChange={e => this.setState({ content: e.target.value })}
                      type="text"
                      placeholder="Content"
                  />
                </div>
                <div className="card-action">
                  <button className="btn" onClick={() => this._addProposal()}>Submit</button>
                </div>
              </div>
            </div>
        </div>
    )
  }

  _addProposal = async () => {
    const { topic, content } = this.state
    await this.props.addProposalMutation({
      variables: {
        topic,
        content
      }
    })
  }
}

const ADDPROPOSAL_MUTATION = gql`
  mutation AddProposalMutation($topic: String!, $content: String!) {
    addProposal(topic: $topic, content: $content) {
      id
      topic
      content
    }
  }
`
export default graphql(ADDPROPOSAL_MUTATION, { name: 'addProposalMutation' })(CreateProposal)