import { FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import website_logo from "../../src/assets/website_logo.png"
import useBookedClass from "../hooks/useBookedClass";
import useAuth from "../hooks/useAuth";



const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [bookedClass] = useBookedClass();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const isUser = !isAdmin && !isInstructor;
  
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-900 text-white">
   <div className="flex mx-auto mb-8"> <img src={website_logo} alt="" /></div> <hr className="my-8"/>
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/dashboard/adminmanageclass">
                  <FaWallet /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FaBook /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass">
                  <AiFillRead /> Add new class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <AiFillRead /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebooking">
                  <AiFillRead /> Manage Booking
                </NavLink>
              </li>
            </>
          )}

          {isUser && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybookedclasses">
                  <AiFillRead /> My booked classes {bookedClass.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolledclasses">
                  <AiFillRead /> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <hr className="my-4" />
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes"> All Classes</NavLink>
          </li>
          <li>
            <NavLink to="/classes">Enroll classes</NavLink>
          </li>
          <li>
            <Link onClick={handleLogOut} >  Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
