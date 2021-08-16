import s from './Profileinfo.module.css'
import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHocks from './ProfileStatusWithHocks'
import userPhoto from '../../../assets/images/user.jpg'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'
const Profileinfo = (props) => {
    const [editMode,setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader />
    }
    const onMainphotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }
    const onSubmit = (formData) =>{
        props.saveProfile(formData).then(
            () =>{
                setEditMode(false)
            }
        )
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={s.photo} />
                    {props.isOwner && <input type={"file"} onChange={onMainphotoSelected}></input>}
                    {editMode ? <ProfileDataForm profile = {props.profile} initialValues={props.profile} onSubmit = {onSubmit}/> : <ProfileData goToEditMode={() => setEditMode(true) }  profile = {props.profile} isOwner={props.isOwner}/>}
                </div>
                <ProfileStatusWithHocks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Full name: </b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professuibal skils: </b>{props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b>{props.profile.aboutMe}
            </div>
            <div><b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })} </div>
        </div>

    )
}

const Contact = (props) => {
    return (
        <div> <b>{props.contactTitle}</b>: {props.contactValue} </div>
    )
}

export default Profileinfo