import { stopSubmit } from "redux-form"
import { profileAPI, userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        { id: 1, massage: 'Its my first post', likeCount: 20 },
        { id: 2, massage: 'Hello', likeCount: 2 },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                massage: action.newPost,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return { ...state };
    }
}
export let addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export let setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export let setStatus = (status) => ({ type: SET_STATUS, status })
export let setPhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })



//THUNKS
export let savePhoto = (file) => {
    return async (dispatch) => {
        let response = await userAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos))
        }
    }
}
export let saveProfile = (profile) => {
    return async (dispatch,getState) => {
        const userID = getState().auth.userID
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(userID))
        }else{
            dispatch(stopSubmit("editProfile",{_error: response.data.messages[0]}))
            return Promise.reject();
        }
    }
}
export let getStatus = (userID) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userID)
        dispatch(setStatus(response.data))
    }
}
export let updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export let getUsersProfile = (userID) => {
    return async (dispatch) => {
        let response = await userAPI.getProfile(userID)
        dispatch(setUsersProfile(response.data))
    }
}
export default profileReducer
