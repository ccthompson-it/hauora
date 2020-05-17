import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'

function Profile() {
  return (
    <Fragment>
      <Header />
      <div className="center">
        <h1>This is the Profile!</h1>
        <Link to="/"><button>Sign Out!</button></Link>
      </div>
    </Fragment>
  )
}

export default Profile