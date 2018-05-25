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
                  <button className="btn" onClick={() => this._createProposal()}>Submit</button>
                </div>
              </div>
            </div>
        </div>
    )
  }

  _createProposal = async () => {
    const { topic, content } = this.state
    await this.props.createProposalMutation({
      variables: {
        topic,
        content
      }
    })
  }
}

const CREATEPROPOSAL_MUTATION = gql`
  mutation CreateProposalMutation($topic: String!, $content: String!) {
    createProposal(topic: $topic, content: $content) {
      id
      topic
      content
    }
  }
`
export default graphql(CREATEPROPOSAL_MUTATION, { name: 'createProposalMutation' })(CreateProposal)