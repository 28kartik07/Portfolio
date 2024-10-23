import '../css/header.css'
import { NavLink } from 'react-router-dom'
function Header()
{
    return (
        // <div className="this_is_header" style={{display: "flex", justifyContent: "center"}}>
            <div id='header_main'>
                <div className='header_element'>
                    <NavLink className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`} to={'/'} >Home</NavLink>
                </div>
                <div className='header_element navlink'>
                    <NavLink className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`}  to={'/Skills'}>Skills</NavLink>
                </div>
                <div className='header_element navlink'>
                    <NavLink  className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`}   to={'/Projects'}>Projects</NavLink>
                </div>
                <div className='header_element navlink'>
                    <NavLink  className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`}   to={'/Achievements'}>Achievements</NavLink>
                </div>
            </div>
        // </div>
    )
}

export default Header