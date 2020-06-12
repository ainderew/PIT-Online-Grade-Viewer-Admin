export const subjectScheduleReducer = (state="",action) =>{
    switch (action.type) {
        case "validSchedule":
            return state = action.scheduleData
        default:
        return state;
    }

}