import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import React from 'react'

const Dialogitem = (props) => {
    let path = "/dialog/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default Dialogitem