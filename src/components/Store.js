import todoReducer from "./Reducer"
import {combineReducers}  from "redux";
import {createStore} from "redux";

const rootReducer = combineReducers({todoReducer});


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;