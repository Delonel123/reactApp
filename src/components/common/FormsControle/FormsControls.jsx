import React from 'react'
import { Field } from 'redux-form'
import s from './FormsControls.module.css'

let FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}



export const Textarea = (props) => {
    const { input, meta, child, ...Restprops } = props;
    return <FormControl {...props}><textarea {...input} {...Restprops} /></FormControl>
}


export const Input = (props) => {
    const { input, meta, children, ...Restprops } = props;
    return <FormControl {...props}><input {...input} {...Restprops} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                validate={validators}
                component={component}
                {...props}
            />
        </div>
    )

}