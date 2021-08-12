import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControle/FormsControls"

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={props.goToEditMode}>Save</button>
                {props.error && <div>
                {props.error}
            </div>}
            </div>
            <div>
                <b>Full name: </b> <div>{createField("Full name", "fullName", [], Input)}</div>
            </div>
            <div>
                <b>Looking for a job </b> <div>{createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
            </div>

            <div>
            </div>
            <div>
                <b>My professuibal skils </b> <div>{createField("lookingForAJobDescription", "lookingForAJobDescription", [], Textarea)}</div>
            </div>

            <div>
                <b>About me: </b> <div>{createField("About me", "aboutMe", [], Textarea)}</div>
            </div>
            <div><b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return (
                    <div key={key}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                )
            })} </div>
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)
export default ProfileDataReduxForm