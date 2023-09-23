import { Link, Outlet } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link><FaHome />User Home</Link></li>
            <li><Link><FaWallet />Payment History</Link></li>
            <li><Link><FaShoppingCart />My Cart</Link></li>
            <li><Link><FaCalendarAlt />Reservations</Link></li>
            <div className="divider"></div> 
            <li><Link to="/"><FaHome />Home</Link></li>
            <li><Link to="/tour"><FaBars />Tours</Link></li>
            <li><Link><FaShoppingBag />Shop</Link></li>
            <li><Link><FaMailBulk />Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
