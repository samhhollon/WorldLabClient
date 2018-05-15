import React from 'react';
import Navbar from '../components/Navbar';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';

export default Page => class SecureTemplate extends React.Component {
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
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <Navbar { ...this.props } />
          <p>You're not authorised. Try to <a href="/login">Login</a></p>  
        </div>
      )
    }
    return (
      <div>
        <Navbar { ...this.props } />
        <br/>
        <Page { ...this.props } />
      </div>
    )
  }
}