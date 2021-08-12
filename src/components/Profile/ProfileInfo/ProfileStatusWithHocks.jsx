import s from './Profileinfo.module.css'
import React from 'react'
import Profile from '../Profile'
import Preloader from '../../common/Preloader/Preloader'
import { useState } from 'react'
import { useEffect } from 'react'


const ProfileStatusWithHocks = (props) => {
    let [editMode,setEditMode] = useState(true)
    let [status,setStatus] = useState(props.status)

    useEffect ( () =>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () =>{
        setEditMode(false);
    }
    const deActivateEditMode = () =>{
        setEditMode(true)
        props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        let text = e.currentTarget.value;
        setStatus(text) 
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}></input>
                </div>
            }
            {editMode &&
            <div>
               <b>Status: </b> <span onDoubleClick={activateEditMode} > {props.status || "No status"}</span>
            </div>
            }
        </div >
    )
}
export default ProfileStatusWithHocks