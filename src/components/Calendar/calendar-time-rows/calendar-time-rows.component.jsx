import React from "react";
import "./calendar-time-rows.style.css";

export const CalendarTimeRow = () =>{

    const divMaker = () =>{
        const divArray = []
        let hour = 7;
        let period = "am"
        for (let i=0; i<28; i++){
            if (i%2 === 0){
                divArray.push( <div key={i} className="calendar-row-day-cel calendar-time-cel"><h1 className="calendar-row-time-text"> {hour}:30 {period} </h1></div>);
                if(hour ===12){
                    hour=1;
                    period="pm"
                }else{
                    hour++
                }
                
            }else{
                divArray.push( <div key={i} className="calendar-row-day-cel calendar-time-cel"><h1 className="calendar-row-time-text"> {hour}:00 {period} </h1></div> )
            }
        }
        return divArray
    } 

    return(
        <div className="calendar-row-container time-row">
             <div className="calendar-row-header"></div>
             {divMaker().map(el => el)}   
        </div>
    )
}