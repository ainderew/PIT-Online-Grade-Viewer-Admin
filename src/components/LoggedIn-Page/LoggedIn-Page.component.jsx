import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Loggedin-Page.style.css"
import HomeSvg from "../../assets/home.svg"
import StudentSvg from "../../assets/student.svg"
import TeacherSvg from "../../assets/teacher.svg"
import SubjectSvg from "../../assets/subjects.svg"
import {SideNavigation} from "../side-navigation/side-navigation.component"
import {UserHeader} from "../user-header/user-header.component"
import {AdminHomePage} from "./home-admin-page/home-admin-page.component"
import {CreateAdminPage} from "./create-admin-page/create-admin-page.component"
import {CreateTeacherPage} from "./create-teacher-page/create-teacher.component"
import {CreateSubjectPage} from "./create-subject-page/create-subject-page.component"
import {EnrollNewStudentPage} from "./enroll-newStudent-page/enroll-newStudent.component"
import {EnrollReturningStudentPage} from "./enroll-returningStudent-page/enroll-returningStudent.component"

export const LoggedInPage = () =>{
    const [navigationData] = useState([
        {
            linkIcon: HomeSvg,
            linkName: "Home",
            linkAddress: "/loggedin",
            linkSubMenu: false
            
        },
        
        {
            linkIcon: StudentSvg,
            linkName: "Student",
            linkAddress: "",
            linkSubMenu: true,
            subMenuLi: [
                {
                    // linkAddress: "",
                    linkName: "Enroll Student",
                    linkSubMenu: true,
                    subMenuLi: [
                        {
                            linkAddress: "/admin/enrollReturning",
                            linkName: "Returning Student",
                            linkSubMenu: false
                            
                        },
                        {
                            linkAddress: "/admin/enrollNew",
                            linkName: "New Student",
                            linkSubMenu: false
                            
                        }
                    ]
                    
                },
                {
                    linkAddress: "/admin",
                    linkName: "Add Student To Database",
                    linkSubMenu: false
                    
                },
                {
                    linkAddress: "/admin",
                    linkName: "Change Student Subjects",
                    linkSubMenu: false
                    
                }
            ]
        },

        {
            linkIcon: TeacherSvg,
            linkName: "Teachers",
            linkAddress: "",
            linkSubMenu: true,
            subMenuLi: [
                {
                    linkAddress: "/admin",
                    linkName: "Assign Subject",
                    linkSubMenu: false
                    
                },
                {
                    linkAddress: "/admin",
                    linkName: "Change Student Subjects",
                    linkSubMenu: false
                    
                },
                {
                    linkAddress: "/admin/createTeacher",
                    linkName: "Create Teacher Account",
                    linkSubMenu: false
                    
                }
            ]
        },


        {
            linkIcon: SubjectSvg,
            linkName: "Subjects",
            linkAddress: "",
            linkSubMenu: true,
            subMenuLi: [
                {
                    linkAddress: "/admin/createSubject",
                    linkName: "Create Subject",
                    linkSubMenu: false
                    
                },
                {
                    linkAddress: "/admin",
                    linkName: "View Subjects",
                    linkSubMenu: false
                    
                }
            ]
        },
        
        {
            linkName: "Create Admin Account",
            linkAddress: "/admin/CreateAdmin",
            linkSubMenu: false
        }
    ])


    return(
        <Router>
            <div className="loggedin-page">
                <SideNavigation navigationData={navigationData} />
                <div className="loggedin-page-container">
                    <UserHeader />
                    <Switch>
                        <Route path="/admin" exact component ={AdminHomePage} />
                        <Route path="/admin/createAdmin" component={CreateAdminPage} />
                        <Route path="/admin/createTeacher" component={CreateTeacherPage} />
                        <Route path="/admin/createSubject" component={CreateSubjectPage} />
                        <Route path="/admin/enrollNew" component={EnrollNewStudentPage} />
                        <Route path="/admin/enrollReturning" component={EnrollReturningStudentPage} />
                    </Switch>
                </div>
            </div>
        </Router>
        
    )
}