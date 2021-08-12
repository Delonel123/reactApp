import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import React from 'react'
const Navbar = () => {
    return (
         <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/ChatPage" activeClassName={s.activeLink}>Chat</NavLink>
            </div>
        </nav>
    )
}
export default Navbar