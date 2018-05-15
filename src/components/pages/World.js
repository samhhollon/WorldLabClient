import React, { Component } from 'react'

import ProposalList from '../ProposalList'
import CreateProposal from '../CreateProposal';

export default class About extends Component {
    render() {
        return (
            <div>
                <CreateProposal/>
                <ProposalList/>
            </div>
        )
    }
}