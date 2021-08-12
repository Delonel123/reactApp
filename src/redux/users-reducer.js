import { userAPI } from "../api/api";
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {

                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : [state.followingInProgress.filter(id => id != action.userID)] }
        default: return state



    }
}
export let folowSuccess = (userID) => ({ type: FOLLOW, userID })
export let unfolowSuccess = (userID) => ({ type: UNFOLLOW, userID })
export let setUsers = (users) => ({ type: SET_USERS, users })
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export let setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export let toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })


//thunk
export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

const followInfolowFlow = async (dispatch, userID,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID))
    let response = await apiMethod(userID)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const folow = (userID) => {
    return async (dispatch) => {
        followInfolowFlow(dispatch,userID,userAPI.folow.bind(userAPI),folowSuccess)
    }
}
export const unfolow = (userID) => {
    return async (dispatch) => {
        followInfolowFlow(dispatch,userID,userAPI.unfolow.bind(userAPI),unfolowSuccess)
    }
}


export default usersReducer
