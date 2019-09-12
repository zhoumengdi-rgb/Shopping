import {createStore,combineReducers} from "redux"
import user from "./user/index.reducer"
import name from "./user/item_name"

let reducer = combineReducers({
    user,
    name
})

let store = createStore(reducer)

window.store = store;
export default store;