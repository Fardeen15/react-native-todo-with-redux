import {createStore} from 'redux'

function User(state = {users :[]},action){
    switch (action.type){
        case 'add' :
            state.users.push(action.payload) 
        return {users : state.users}
        default : 
        return state
    }
}
let store = createStore(User)
export default store