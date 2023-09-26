import {  NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { AiOutlineBars, AiOutlineFileAdd, AiOutlineUser } from 'react-icons/ai';
import { MdManageHistory } from 'react-icons/md';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
  const [cart] = useCart()
  // TODO: 
  // const isAdmin = true;
  const [isAdmin] = useAdmin()



  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-slate-300">
          {/* Page content here */}
          
          <label
            htmlFor="my-drawer-2"
            className="btn hover:btn-neutral ms-auto my-2 me-2 drawer-button mb-4 lg:hidden"
          >
            <AiOutlineBars />
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-400 ">


            {
              isAdmin ? <>
                <li><NavLink to="/dashboard/home"><FaHome />Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/addtour"><AiOutlineFileAdd />Add Tours</NavLink></li>
                <li><NavLink to="/dashboard/managetour"><MdManageHistory />Manage Tours</NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt />Manage Bookings</NavLink></li>
                <li><NavLink to="/dashboard/allusers"><AiOutlineUser />All Users</NavLink></li>    
              </> : <>
                <li><NavLink to="/dashboard/home"><FaHome />User Home</NavLink></li>
                <li><NavLink to="/dashboard/mycart"><FaShoppingCart />My Cart <div className="inline badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservations</NavLink></li>
                <li><NavLink to="/dashboard/payment"><FaWallet />Payment History</NavLink></li>             
              </>
            }



            <div className="divider"></div> 
            <li><NavLink to="/"><FaHome />Home</NavLink></li>
            <li><NavLink to="/tour"><FaBars />Tours</NavLink></li>
            <li><NavLink to="/"><FaShoppingBag />Shop</NavLink></li>
            <li><NavLink to="/"><FaMailBulk />Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
