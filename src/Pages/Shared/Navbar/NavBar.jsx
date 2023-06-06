import './NavBar.css'

const NavBar = () => {


    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>Instructors</a></li>
        <li><a>Classes</a></li>
        <li><a>Dashboard </a></li>
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
  <div className="navbar-end">
    <a className="btn">Get Started</a>
  </div>
</div>
        </>
    );
};


export default NavBar;

