import s from './Post.module.css'
import React from 'react'
const Post = (props) => {
    return (
        <div className={s.item}>
            {props.message}
            <div className={s.logo}>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}
export default Post