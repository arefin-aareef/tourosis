import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./NavBar.css";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import useCart from "../../../hooks/useCart";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [cart] = useCart()
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 10) {
        setScrolled(true)
      } else 
      setScrolled(false)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  


  const navOptions = (
    <div className="flex font-semibold">
      <li className="">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="">
        <Link to="/tour" className="nav-link">
          Tour
        </Link>
      </li>
      <li className="">
        <Link to="/flight" className="nav-link">
          Flight
        </Link>
      </li>
      <li className="">
        <Link to="/hotel" className="nav-link">
          Hotel
        </Link>
      </li>
      <li className="">
        <Link to="/bookings/adventure" className="nav-link">
          Bookings
        </Link>
      </li>
      {
        user ? <li className="my-auto">
        <Link to="/dashboard/home" className="nav-link">
          {/* <button className="flex">
            <AiOutlineShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button> */}
          Dashboard
        </Link>
      </li> : <></>
      }
    </div>
  );
  return (
    <div className={`navbar px-5 z-20 fixed bg-transparent text-white max-w-screen-xl ${scrolled ? "scrolled " : "transition-all duration-500 ease-out"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700  rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="ms-2 text-2xl normal-case">Tourosis</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
      </div>
      {user ? (
        <>
          <div className="navbar-end">
            <span className="me-2">
              <img
                style={{ width: 48, height: 48, borderRadius: "20%" }}
                src={user?.photoURL}
                alt={user?.displayName}
                title={user?.email}
              />
            </span>
            <Link onClick={handleLogOut} to="/" className="btn">
              Log Out
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
