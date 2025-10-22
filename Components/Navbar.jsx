import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../Contexts/AuthContext'

const Navbar = () => {
  const { user } = use(AuthContext)

  const navItem = (<>
    <li><NavLink to={"/"} className={"btn ml-2"}>Home</NavLink></li>
    <li><NavLink to={"/services"} className={"btn ml-2"}>Services</NavLink></li>
    <li><NavLink to={"/profile"} className={"btn ml-2"}>My Profile</NavLink></li>
  </>
  )

  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItem}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-semibold">WarmPaws</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? <div className="">User</div> : <div className="">
          <Link to="/login">
            <button className="btn text-white btn-info">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn text-white btn-success">Register</button>
          </Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar