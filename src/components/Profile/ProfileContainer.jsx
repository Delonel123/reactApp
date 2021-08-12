import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus } from '../../redux/profile-reducer'
import { withAuthRedire } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }
    render() {
        return (
            <Profile {...this.props} isOwner = {!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto = {this.props.savePhoto} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userID,
    isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto,saveProfile }),
    withRouter,
)(ProfileContainer)