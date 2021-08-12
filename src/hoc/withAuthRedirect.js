import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
        
    }
}
export const withAuthRedire = (Component) => {
    class RedireComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to="/Login" />
            }
            return <Component {...this.props} />
        }
    }

    let ConnecredAuthRedirectComponents = connect(mapStateForRedirect)(RedireComponent)
    return ConnecredAuthRedirectComponents
}