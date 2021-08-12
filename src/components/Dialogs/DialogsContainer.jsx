import { sendMassageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedire } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMassageCreator: (newMassageBody) => { dispatch(sendMassageCreator(newMassageBody)) }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedire,
)(Dialogs)