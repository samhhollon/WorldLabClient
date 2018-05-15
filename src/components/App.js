import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import World from './pages/World'
import About from './pages/About'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <Switch>
          <Route exact path="/" component={World} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App