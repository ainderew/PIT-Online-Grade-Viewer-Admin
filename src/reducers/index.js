import {userInfoReducer} from "./userInfo"

import {combineReducers} from "redux"

export const allReducers = combineReducers({
    userInfo: userInfoReducer
})