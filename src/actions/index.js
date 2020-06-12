export const userInfo = (data) =>{
    return{
        type: "valid",
        userInfo: data
    }
}

export const subjectSchedule = (data) =>{
    return{
        type: "validSchedule",
        scheduleData: data
    }
}