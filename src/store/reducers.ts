import {userReducer as users} from "./users/index";
import {logReducer as logs} from './logs/index'
import {carsReducer as cars} from './cars/index'
import {RootState} from "./state";
import {combineReducers} from "redux";

export default combineReducers<RootState>({
    users,
    logs,
    cars,
});
