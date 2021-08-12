import React from 'react'
import { useState } from 'react'
import s from './Users.module.css'

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let portionCount = Math.ceil((totalUsersCount) / pageSize)
    let [portNumber, setPortNumber] = useState(1);
    let leftPorttionNumber = (portNumber - 1) * pageSize + 1;
    let rightPortionNumber = portNumber * pageSize
    let pages = [];
    for (let i = 1; i <= portionCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {/* {pages.map(p => {
                return <span className={currentPage == p && s.selectedPage}
                    onClick={() => {onPageChanged(p) }}
                >{p}</span>
            })} */}
            {
                leftPorttionNumber > 1 && <button onClick ={() => setPortNumber(portNumber - 1)}>PREV</button>
            }
            {
                pages.filter(p => p >= leftPorttionNumber && p <= rightPortionNumber).map(p => {
                   return <span className={currentPage == p && s.selectedPage}
                        onClick={() => { onPageChanged(p) }}
                    >{p} </span>
                })
            }
            {rightPortionNumber < totalUsersCount && <button onClick={() => setPortNumber(portNumber + 1)} >NEXT</button>}


        </div>
    )
}
export default Paginator