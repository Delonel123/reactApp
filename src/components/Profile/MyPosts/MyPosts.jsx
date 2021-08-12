import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requried } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControle/FormsControls'

const maxLength10 = maxLengthCreator(10);

class MyPosts extends React.PureComponent {

    render() {
        let onaddMassame = (values) => {
            this.props.addPost(values.newPostText);

        }
        let postsElement = this.props.posts.map(p => <Post message={p.massage} likeCount={p.likeCount} key={p.id} />)
        return (
            <div className={s.postsBlock}>
                <h3>mypost</h3>
                <div>
                    <MyPostReduxForm onSubmit={onaddMassame} />
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        )
    }
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requried, maxLength10]} component={Textarea} placeholder={"add post"} name={"newPostText"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
export default MyPosts