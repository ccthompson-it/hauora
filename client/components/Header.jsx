import React from "react"
import { NavLink, useParams } from 'react-router-dom'

function Header(props) {
  let { user } = useParams()
  return (
    <div className="nav-bar">
      <h1 id="main-title">Hauora</h1>
      <div className="nav-links">
        <NavLink to={`/${user}/profile`} activeClassName="active-link">User Profile</NavLink>
        <NavLink to={`/${user}/dashboard`} activeClassName="active-link">Dashboard</NavLink>
        <NavLink to={`/${user}/planner`} activeClassName="active-link">Weekly Planner</NavLink>
        <NavLink to={`/${user}/stats`} activeClassName="active-link">Stats/Progress</NavLink>
      </div>
    </div>
  )
}

export default Header