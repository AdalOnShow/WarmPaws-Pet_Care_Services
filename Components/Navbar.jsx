import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../Contexts/AuthContext'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const Navbar = () => {
  const { user, logOutFunc, loading } = use(AuthContext)

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you wnat to Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        logOutFunc()
          .then(() => {
            toast.success("logOut Successfull")
          })
          .catch(() => {
            toast.error("Something went wrong. Please try again later.")
          })
      }
    });
  }


  const navItem = (<>
    <li><NavLink to={"/"} className={"btn ml-2"}>Home</NavLink></li>
    <li><NavLink to={"/services"} className={"btn ml-2"}>Services</NavLink></li>
    <li><NavLink to={"/profile"} className={"btn ml-2"}>My Profile</NavLink></li>
  </>
  )

  return (
    <div className="navbar max-w-11/12 mx-auto z-40">
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
        {loading ?
          <button className="loading loading-spinner loading-md"></button>
          :
          user
          ?
          <div className="flex-center gap-4">
            <Link to="/profile">
              <div className="avatar relative group">
                <div className="ring-success ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL ? user.photoURL : `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`} />
                </div>
                {user?.displayName && <p className="z-50 text-center absolute p-4 w-max right-0 top-12 bg-white rounded-2xl shadow-md hidden group-hover:block transition-all duration-300">{user.displayName}</p>}
              </div>
            </Link>
            <button onClick={handleLogOut} type="button" className='btn btn-success text-white'>LogOut</button>
          </div>
          :
          <div className="flex-center gap-4">
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