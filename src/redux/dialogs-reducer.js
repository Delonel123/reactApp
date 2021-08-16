const SEND_MASSAGE = 'SEND-MASSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' }
    ],
    massages: [
        { id: 1, massage: 'Hi' },
        { id: 2, massage: 'How are you' },
        { id: 3, massage: 'You stupid' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MASSAGE: {
            let body = action.newMassageBody
            return {
                ...state,
                massages: [...state.massages, { id: 6, massage: body }],
            }
        }
        default:
            return {...state}
    }
}
export let sendMassageCreator = (newMassageBody) => ({ type: SEND_MASSAGE,newMassageBody })

export default dialogsReducer
