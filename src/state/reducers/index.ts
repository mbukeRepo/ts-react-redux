import reducer from "./repositoryReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
    repositories: reducer
});

export default reducers;