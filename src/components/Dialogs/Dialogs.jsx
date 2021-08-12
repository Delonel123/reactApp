import Dialogitem from './Dialogitem/Dialogsitem'
import Massage from './Massage/Massage'
import s from './Dialogs.module.css'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControle/FormsControls'
import { maxLengthCreator, requried } from '../../utils/validators/validators'


let Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <Dialogitem name={d.name} key={d.id} id={d.id} />)
    let massagesElement = state.massages.map(m => <Massage massage={m.massage} key={m.id} />
    )

    let addNewMassage = (values) => {
        props.sendMassageCreator(values.newMassageBody)
    }
    if (!props.isAuth) {
        return <Redirect to="/Login" />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsItems}>
                {massagesElement}
            </div>
                <AddMassageFormRudex onSubmit={addNewMassage} />
        </div>
    )
}
const maxLength = maxLengthCreator(100)
const addMassageForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requried, maxLength]} placeholder={"Enter your massage"} name={"newMassageBody"} component={Textarea} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
    )
}

const AddMassageFormRudex = reduxForm({
    form: 'dialogAddMassageForm'
})(addMassageForm)
export default Dialogs