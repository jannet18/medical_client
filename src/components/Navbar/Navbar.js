import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({user, setUser}) => {
    function handleLogout () {
        fetch("/logout", {
            method: 'DELETE',
        })
        .then(() => {
            setUser(null)
        });
    }

    return (
        <header className='nav_bar'>
            <nav className='branding'>
            <Link to='/' style={{borderBottom: "none"}}> 
                <h1>
                    <span className='logo'>{"//"}</span>
                    Tigoni Medical
                </h1>
                </Link>

                <div className='navigation'>
                    <NavLink to='/departments'>Our Team</NavLink>
                    <NavLink to='/aboutus'>About Us</NavLink>
                    <NavLink to='/portal'>{user ? 'Portal' : null}</NavLink>
                    {user? <NavLink to="/" onClick={handleLogout}>Log Out</NavLink> : <NavLink to="/login">Login/Sign Up</NavLink>}

                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar;