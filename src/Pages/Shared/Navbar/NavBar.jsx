import { Link } from 'react-router-dom';
import './NavBar.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useBookedClass from '../../../hooks/useBookedClass';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bookedClass] = useBookedClass();

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><a>Instructors</a></li>
        <li><a>Classes</a></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        <li>
            <Link to="/dashboard/mybookedclasses">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{bookedClass?.length || 0}</div>
                </button>
            </Link>
        </li>

      
    </>


    return (
        <>
       
<div className="navbar bg-base-100 max-w-screen-xl mx-auto bg-blue-900 text-white rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  bg-blue-900 text-white rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
      
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get Started</a>
  </div> */}

<div className="navbar-end">
    {user?.email ? (
      <>
        <div className="avatar placeholder">
          <div className=" bg-neutral-focus text-neutral-content rounded-full w-8">
            <img
              src={user?.photoURL}
              title={user.displayName}
              alt="User image"
            />
          </div>
        </div>
        <button onClick={handleLogOut} className="btn ml-2">
          Logout
        </button>
      </>
    ) : (
      <>
        <button className="btn bg-[#D36F3F] hover:bg-blue-700 border-0 ml-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn ml-2 border-0 bg-[#D36F3F] hover:bg-blue-700 text-white font-bold">
          <Link to="/register">Register</Link>
        </button>
      </>
    )}
  </div>
</div>
        </>
    );
};


export default NavBar;

