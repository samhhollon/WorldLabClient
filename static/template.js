import React from 'react';
import Navbar from '../components/Navbar';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';

export default Page => class Template extends React.Component {
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser ? await getTokenForBrowser() : await getTokenForServer(req);
    const pageProperties = await Page.getInitialProps && await Page.getInitialProps(req);
    return {
      ...pageProperties,
      loggedInUser,
      isLoggedIn: !!loggedInUser
    }
  }

  render() {
    return (
      <div>
        <Navbar { ...this.props } />
        <br/>
        <Page { ...this.props } />
      </div>
    )
  }
}