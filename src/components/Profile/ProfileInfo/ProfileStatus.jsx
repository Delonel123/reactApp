import s from './Profileinfo.module.css'
import React from 'react'
import Profile from '../Profile'
import Preloader from '../../common/Preloader/Preloader'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        let text = e.currentTarget.value;
        this.setState({
           status: text
        })
    }
    componentDidUpdate(prevProps,prevState){
        if( prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}></input>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>}
            </div >
        )
    }

}

export default ProfileStatus