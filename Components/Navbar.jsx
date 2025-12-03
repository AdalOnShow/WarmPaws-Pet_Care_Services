import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutFunc, loading } = use(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you wnat to Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutFunc()
          .then(() => {
            toast.success("logOut Successfull");
          })
          .catch(() => {
            toast.error("Something went wrong. Please try again later.");
          });
      }
    });
  };

  const navItem = (
    <>
      <li>
        <NavLink to={"/"} className={"btn ml-2"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/services"} className={"btn ml-2"}>
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className={"btn ml-2"}>
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className={"btn ml-2"}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to={"/support"} className={"btn ml-2"}>
          Support
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/profile"} className={"btn ml-2"}>
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky z-50 mx-auto rounded-md shadow-md top-2 navbar max-w-11/12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link
          to={"/"}
          className="hidden text-2xl font-bold text-shadow-2xs md:block"
        >
          WarmPaws
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navItem}</ul>
      </div>
      <div className="gap-4 navbar-end">
        {loading ? (
          <button className="loading loading-spinner loading-md"></button>
        ) : user ? (
          <div className="gap-4 flex-center">
            <Link to="/profile">
              <div className="relative avatar group">
                <div className="w-10 rounded-full ring-success ring-offset-base-100 ring-2 ring-offset-2">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`
                    }
                  />
                </div>
                {user?.displayName && (
                  <p className="absolute right-0 z-50 hidden p-4 text-center transition-all duration-300 bg-white shadow-md w-max top-12 rounded-2xl group-hover:block">
                    {user.displayName}
                  </p>
                )}
              </div>
            </Link>
            <button
              onClick={handleLogOut}
              type="button"
              className="text-white btn btn-success"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="gap-4 flex-center">
            <Link to="/login">
              <button className="text-white btn btn-info">Login</button>
            </Link>
            <Link to="/register">
              <button className="text-white btn btn-success">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
