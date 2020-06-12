import React from "react";
import {useHistory} from "react-router-dom";
import "./enroll-newStudent.style.css"


export const EnrollNewStudentPage = () =>{
    let history = useHistory();
    
    const continuingStudentBtn = () =>{
        history.push("/admin/enrollContinuing")
    }

    return(
        <div className="enroll-new-student-page">
            <div className="enroll-new-student-form-container">
                <div className="enroll-new-student-left-div">
                    <h1 className="enroll-new-text1">Enrollment For <span className="enroll-new-span1">New</span> Students</h1>
                    <h2 className="enroll-new-text2">If you meant to enroll a continuing student<br/>Please click the button below </h2>
                    <button onClick={continuingStudentBtn} className="enroll-new-button">Continuing Student</button>
                </div>
                <form action="" className="enroll-new-student-form">
                    <div className="enroll-new-form-div1">
                        <div className="enroll-new-form-input-div">
                            <label htmlFor="">First Name</label>
                            <input className="enroll-new-input new-name-input new-fName" type="text" name="fName" />
                        </div>
                        <div className="enroll-new-form-input-div">
                            <label htmlFor="">Middle Name</label>
                            <input className="enroll-new-input new-name-input new-mName" type="text" name="mName" />
                        </div>
                        <div className="enroll-new-form-input-div">
                            <label htmlFor="">Last Name</label>
                            <input className="enroll-new-input new-name-input new-lName" type="text" name="lName" />
                        </div>
                    </div>
                    <div className="enroll-new-form-div2">
                        <div className="enroll-new-form-input-div">
                            <label htmlFor="course">Course</label>
                            <select className="enroll-new-input new-course-input" name="course">
                                <option value="Junior High School">Junior High School</option>
                                <option value="Engineering">BS Mechanical Engineering</option>
                                <option value="Junior High School">BS Electrical Engineering</option>
                            </select>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}