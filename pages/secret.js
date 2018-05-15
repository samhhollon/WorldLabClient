import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import SecureTemplate from '../static/secure-template';

import withData from '../lib/withData'

import App from '../components/App'

const Secret = ({ loggedInUser }) => (
  <App>
    <span>Hi { loggedInUser.nickname }!</span>
  </App>
)

Secret.propTypes = {
  loggedInUser: PropTypes.object
};

export default SecureTemplate(Secret);