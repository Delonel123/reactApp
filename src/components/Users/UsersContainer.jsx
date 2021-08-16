import React from 'react'
import { connect } from 'react-redux'
import { folow, unfolow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors'



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.PageNumber, this.props.pageSize);
    }
    onPageChanged = (PageNumber) => {
        this.props.requestUsers(PageNumber, this.props.pageSize);

    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfolow={this.props.unfolow}
                folow={this.props.folow}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}
export default connect(mapStateToProps, { folow, unfolow, setCurrentPage, toggleFollowingProgress, requestUsers })(UsersContainer);