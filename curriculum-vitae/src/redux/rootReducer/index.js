import { combineReducers } from "redux";
import cvReducer from "../reducer";

const rootReducer = combineReducers({
    cv: cvReducer
})

export default rootReducer