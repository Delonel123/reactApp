import { authAPI } from "../api/api"
import { stopSubmit } from 'redux-form'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,

}

const authsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return { ...state }
    }
}

export let setAuthUserData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userID, email, login, isAuth } })

// thunk
export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.me();

        if (response.data.resultCode == 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }

    }
}
export const login = (email, password, rememberme) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberme);
        if (response.data.resultCode == 0) {
            dispatch(getAuthUserData())
        } else {
            let massage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", { _error: massage }))
        }
    }
}
export const loginout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode == 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authsReducer
