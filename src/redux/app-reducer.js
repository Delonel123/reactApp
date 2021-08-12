import { getAuthUserData } from "./auth-reducer"

const SET_SUCCESS = 'SET_SUCCESS'
let initialState = {
    initialized: false,

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return { ...state }
    }
}

export let initializedSuccess = (type) => ({ type: SET_SUCCESS, payload: { type: SET_SUCCESS } })

// thunk
export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })

    }
}
export default appReducer
