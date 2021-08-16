import React from 'react'
import Paginator from './Paginator'
import User from './User'

let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {
                props.users.map((u) =>
                    <User key = {u.id} followingInProgress={props.followingInProgress} u={u} unfolow={props.unfolow} folow ={props.folow} />
                )
            }
        </div>
    )
}
export default Users