import ShowReducer from "../Reducer/Reducer";
import { legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
const rootReducer=combineReducers({
    ShowReducer
})
const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))
export default Store;