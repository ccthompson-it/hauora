import React from "react"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="center">
      <h1>This is the Landing Page!</h1>
      <Link to="/1/planner"><button>Sign In!</button></Link>
    </div>
  )
}

export default Landing