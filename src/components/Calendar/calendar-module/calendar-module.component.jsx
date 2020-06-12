import React,{useState} from "react";
import "./calendar-module.style.css";
import {useDispatch} from "react-redux"
import {subjectSchedule} from "../../../actions"
import {CalendarRow} from "../calendar-row/calendar-row.component";
import {CalendarTimeRow} from "../calendar-time-rows/calendar-time-rows.component"

export const CalendarModule = (props) =>{
    const dispatch = useDispatch()
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

        await fetch("https://online-grade-viewer-api.herokuapp.com/Admin/CreateSubject",{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(request)
        })
        .then( response => response.json())
        .then( data => dispatch(subjectSchedule(data)))

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