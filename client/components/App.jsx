import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Landing from './Landing'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Planner from './Planner'
import Stats from './Stats'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:user/profile">
          <Profile />
        </Route>
        <Route path="/:user/dashboard">
          <Dashboard />
        </Route>
        <Route path="/:user/planner">
          <Planner />
        </Route>
        <Route path="/:user/stats">
          <Stats />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
