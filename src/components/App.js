import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import World from './pages/World'
import About from './pages/About'
import Login from './Login'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <Switch>
          <Route exact path="/" component={World} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App