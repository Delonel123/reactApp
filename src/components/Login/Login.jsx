import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { requried } from '../../utils/validators/validators'
import { Input } from '../common/FormsControle/FormsControls'
import s from './../common/FormsControle/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[requried]} placeholder={"Login"} name={"email"} component={Input} />
            </div>
            <div>
                <Field validate={[requried]} placeholder={"Password"} name={"password"} component={Input} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} />remember me
            </div>
            {error && <div className={s.formSummerError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { login })(Login)