import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router'

// Components
import Faq from './components/faq'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/faq" component={Faq} />
      </Router>
    )
  }
}

export default AppRouter