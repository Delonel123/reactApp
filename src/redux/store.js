import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massage: 'Its my first post', likeCount: 20 },
                { id: 2, massage: 'Hello', likeCount: 2 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Anton' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' }
            ],
            massages: [
                { id: 1, massage: 'Hi' },
                { id: 2, massage: 'How are you' },
                { id: 3, massage: 'You stupid' }
            ],
            newMassageBody:'Anton'
        }


    },
    _callSubscriber() {
        console.log('123');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

        this._callSubscriber(this._state);
        
    }

}






export default store