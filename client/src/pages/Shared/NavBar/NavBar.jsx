const NavBar = () => {
  const navOptions = (
    <>
      <li className="hover:bg-white rounded">
        <a>Flight</a>
      </li>
      <li className="hover:bg-white rounded">
        <a>Hotel</a>
      </li>
      <li className="hover:bg-white rounded">
        <a>Tour</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="ms-2 text-2xl normal-case">Tourosis</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
