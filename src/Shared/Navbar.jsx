import { NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const Navbar = () => {
    const { user, logoutUser,setLoading,setUser } = useAuth()
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>

        {/* for applicant links, check roles as weell */}
        { user && 
        <li>
            <NavLink to="/applications">My Applications</NavLink>
        </li>}

        {/* for recruiter links, check roles as weell */}
        { user && 
        <>
            <li>
                <NavLink to="/addJob">Add Job</NavLink>
            </li>
            <li>
                <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
            </li>
        </>
        }
    </>
    // 

    const handleLogout = ()=>{
        setLoading(true)
        return logoutUser()
        .then(()=>{
            axios.post("http://localhost:3000/logout",{},{
                withCredentials : true
            })
            .then(()=>{
                setUser(null)
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })
        })
        .catch(e=>{
            console.log(e.message)
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-1">
                    {user
                        ? <button onClick={handleLogout} className='btn btn-sm'>Logout</button>
                        : <>
                            <NavLink to="/register" className="btn btn-sm">Register</NavLink>
                            <NavLink to="/login" className="btn btn-sm">Sign In</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;