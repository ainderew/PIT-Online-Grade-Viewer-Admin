import {userInfoReducer} from "./userInfo"
import {subjectScheduleReducer} from "./subjectSchedule"

import {combineReducers} from "redux"

export const allReducers = combineReducers({
    userInfo: userInfoReducer,
    subjectSchedule: subjectScheduleReducer
})