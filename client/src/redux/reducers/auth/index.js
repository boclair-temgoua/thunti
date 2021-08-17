import produce from 'immer'

const initialState = {
    userSite: {}
}


export default produce((draft, action = {}) => {
    switch (action.type) {
        case 'LOGOUT':
            draft.userSite = action.payload
        default:
    }
},
    initialState
)