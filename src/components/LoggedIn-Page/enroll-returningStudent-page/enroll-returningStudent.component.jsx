import React, {useState} from "react";
import "./enroll-returningStudent.style.css"
import PitLogo from "../../../assets/PitLogo.png"


export const EnrollReturningStudentPage = () =>{
    const [findStudentForm, setFindStudentForm] = useState("enroll-returning-findStudent-form")

    return(
        <div className="enroll-returning-page">
            {/* <h1 className="returning-page-text">Returning Student</h1> */}
                <form className={findStudentForm}>
                    <div className="enroll-returning-form-input-div">
                        <img src={PitLogo} alt="" className="returning-find-form-img"/>
                        <label htmlFor="idNumber">Id Number<br/>of returning student</label>
                        <input type="text" name="idNumber" className="returning-input-field returning-find-input"/>
                    </div>
                    <button className="returning-find-button">Find</button>
                </form>

            <div className="enroll-returning-main">

            </div>
        </div>
    )
}