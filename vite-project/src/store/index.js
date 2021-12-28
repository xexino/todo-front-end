import { createStore } from "redux"
import { RoteReducer } from "./reducers/movie"

const store = createStore(RoteReducer,

           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store 