import React, {useState} from "react";
import "./create-subject-page.style.css";
import {CalendarModule} from "../../Calendar/calendar-module/calendar-module.component"
import Calendar from "../../../assets/calendar.svg"

export const CreateSubjectPage = () =>{
    const current = new Date();
    const year = current.getFullYear();

    const [displayStatus, setDisplayStatus] = useState({
        status: false,
        className: "calendar-module-off"
    })
    const [pageScreen, setPageScreen] = useState("create-subject-page")
    
    const displayToggler = () =>{
       if ( displayStatus.status ){
            setDisplayStatus({
                status: false,
                className: "calendar-module-off"
            })
            setPageScreen("create-subject-page")

       }else{
            setDisplayStatus(
                {
                    status: true,
                    className: "calendar-module-on"
                }
            )
            setPageScreen("create-subject-page blurred")
       }
    }
    

    return(
        <div className="create-subject-page" >
            <div className={pageScreen}>
                <form className="create-subject-form" action="">
                <div className="create-subject-row-div1">
                        <div className="create-subject-input-div">
                            <label htmlFor="subjectName">Subject Name</label>
                            <input className="create-subject-input create-subject-name" type="text" name="subjectName" />
                        </div>
                        <div className="create-subject-input-div">
                            <label htmlFor="subjectName">Subject Code</label>
                            <input className="create-subject-input create-subject-code" type="text" name="subjectCode" />
                        </div>
                        <div className="create-subject-input-div">
                            <label htmlFor="section">Section</label>
                            <input className="create-subject-input create-subject-code" type="text" name="section" />
                        </div>
                        <div className="create-subject-input-div">
                            <label htmlFor="units">Units</label>
                            <select className="create-subject-input create-subject-unit" name="units"> 
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                </div>
                <div className="create-subject-row-div2">
                    <div className="create-subject-input-div">
                        <label htmlFor="teacher">Instructor</label>
                        <input type="text" className="create-subject-input create-subject-teacher" name="teacher" placeholder="Can Be Assigned Later" />
                    </div> 
                </div>
                <div className="create-subject-row-div3">
                    <div className="set-schedule-div">
                        <h1 className="set-schedule-text"> Set Schedule</h1>
                        <button type="button" className="set-schedule-btn" onClick={displayToggler} > <img className="set-schedule-btn-img" src={Calendar} alt=""/> </button>
                    </div>
                </div>

                <div className="create-subject-row-div4">
                        <div className="create-subject-input-div">
                            <label htmlFor="semester">Semester</label>
                            <select name="semester" className="create-subject-input create-subject-sem">
                                <option value="First">First</option>
                                <option value="Second">Second</option>
                                <option value="Summer">Summer</option>
                            </select>
                        </div>
                        <div className="create-subject-input-div">
                            <label htmlFor="year">Year</label>
                            <input type="text" className="create-subject-input create-subject-year" readOnly={true} value={year}/>
                        </div>
                </div>
                <div className="create-subject-row-div5 ">
                        <div className="create-subject-input-div">
                            <label htmlFor="subjectName">Department</label>
                            <select className="create-subject-input create-subject-name"name="department">
                                <option value=""></option>
                                <option value="SHS">Department of SHS</option>
                                <option value="LHS">Department of LHS</option>
                                <option value="Mechanical Engineering">Department of Mechanical Engineering</option>
                                <option value="Electrical Engineering">Department of Electrical Engineering</option>
                            </select>
                        </div>
                        <div className="create-subject-row">
                            <div className="create-subject-input-div">
                                <label htmlFor="subjectName">Room</label>
                                <input type="text" className="create-subject-input create-subject-room" />
                            </div>
                            <div className="create-subject-input-div">
                                <label htmlFor="subjectName">Capacity</label>
                                <input type="text" className="create-subject-input create-subject-capacity" />
                            </div>
                        </div>
                </div>
                <div className="create-subject-row-div6 ">
                    <button className="create-subject-button create-subject-reset">RESET</button>
                    <button className="create-subject-button create-subject-create">CREATE</button>
                </div>
                </form>
            </div>
            <CalendarModule Display={displayStatus.className} DisplayToggler={displayToggler} />
        </div>
    )
}