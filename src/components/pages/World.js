import React, { Component } from 'react'

// import CreateProposal from '../CreateProposal'
// import ProposalList from '../ProposalList'

import TempCreate from '../TempCreate'
import TempList from '../TempList'

export default class About extends Component {
    render() {
        return (
            <div className="row">
                {/* <CreateProposal/> */}
                {/* <ProposalList/> */}

                <div className="col s12 m4">
                    <TempCreate title="Create Question"/>
                    <TempList title="Questions"/>
                </div>
                <div className="col s12 m4">
                    <TempCreate title="Make Proposal"/>
                    <TempList title="Proposals"/>
                </div>
                <div className="col s12 m4">
                    <TempList title="Canon"/>
                </div>
            </div>
        )
    }
}