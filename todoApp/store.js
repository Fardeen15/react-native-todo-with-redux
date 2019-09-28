import { createStore } from 'redux'

function User(state = { users: [] }, action) {
    switch (action.type) {
        case 'add':
            state.users.push(action.payload)
            return { users: state.users }
        case 'del':
            state.users.splice(action.payload, 1)
            return { users: state.users }
        case 'edit':
            state.users.splice(action.index, 1,action.payload)
            console.warn(state.users)
            return { users: state.users }
        default:
            return state
    }
}
let store = createStore(User)
export default store