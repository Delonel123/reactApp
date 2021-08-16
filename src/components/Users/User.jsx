import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

let User = (props) => {
    return (
        <div className={s.name}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.u.id}>
                        <img src={props.u.photos.small != null ? props.u.photos.small : userPhoto} className={s.img} />
                    </NavLink>
                </div>
                <div>
                    {
                        props.u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => { props.unfolow(props.u.id) }}> Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => { props.folow(props.u.id) }}> Follow </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.u.name}</div>
                    <div>{props.u.status}</div>
                </span>
            </span>
        </div>
    )
}
export default User