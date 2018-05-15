import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';

import withData from '../lib/withData'

import App from '../components/App'
import ProposalList from '../components/ProposalList'
import CreateProposal from '../components/CreateProposal'

const Index = ({ isLoggedIn }) => (
  <App>
    <CreateProposal/>
    <ProposalList/>
  </App>
);

Index.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default withData(template(Index));