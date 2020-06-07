import React,{useState} from "react";
import "./calendar-module.style.css";
import {CalendarRow} from "../calendar-row/calendar-row.component";
import {CalendarTimeRow} from "../calendar-time-rows/calendar-time-rows.component"

export const CalendarModule = (props) =>{
    const [childState, setChildState] = useState([{}])
    const [clearState, setClearState] = useState(true)

    const dataCollector = (childData,index) =>{
        const placeHolder = [...childState]
        placeHolder.splice(index,1,childData)
        setChildState(placeHolder)
        // setChildState(childstate => childState)
        // setChildState(childstate => childState.splice(index,1,childData))
    }
    
    const clearSchedule = () =>{
        setClearState( prevState => !prevState)
        setChildState( [{}])
    }

    const submitSchedule = async () =>{
        const request ={
            state: childState
        }

        await fetch("http://localhost:3000/Admin/CreateSubject",{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(request)
        })
        .then( response => response.json())
        .then( data => console.log(data))
        props.DisplayToggler();
        
    }

    return(

        <div className={props.Display}>
            <div className="calendar-module-container">
                <CalendarTimeRow />
                <CalendarRow Day={"Monday"} ParentFunction = {dataCollector} Clear={clearState} index="0" />
                <CalendarRow Day={"Tuesday"} ParentFunction = {dataCollector} Clear={clearState} index="1"/>
                <CalendarRow Day={"Wednesday"} ParentFunction = {dataCollector} Clear={clearState} index="2"/>
                <CalendarRow Day={"Thursday"} ParentFunction = {dataCollector} Clear={clearState} index="3"/>
                <CalendarRow Day={"Friday"} ParentFunction = {dataCollector} Clear={clearState} index="4"/>
                <CalendarRow Day={"Saturday"} ParentFunction = {dataCollector} Clear={clearState} index="5"/>
                <CalendarRow Day={"Sunday"} ParentFunction = {dataCollector} Clear={clearState} index="6"/>
            </div>
           <div className="calendar-module-button-container">
                <button className="calendarClearBtn" type="button" onClick={clearSchedule}>Clear</button>
                <button className="calendarSubmitBtn" type="button" onClick={submitSchedule}>Set Schedule</button>
           </div>
        </div>
    )
}