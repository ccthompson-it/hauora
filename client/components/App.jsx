import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Landing from './Landing'
import Planning from './Planner'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/planner">
          <Planning />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
