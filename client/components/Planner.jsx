import React from "react"
import { Link } from 'react-router-dom'

function Planner() {
  return (
    <div className="center">
      <h1>This is the Planning Page!</h1>
      <Link to="/"><button>Sign Out!</button></Link>
    </div>
  )
}

export default Planner