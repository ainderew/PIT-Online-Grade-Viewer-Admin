import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Loggedin-Page.style.css"
import {SideNavigation} from "../side-navigation/side-navigation.component"
import {UserHeader} from "../user-header/user-header.component"
import {AdminHomePage} from "./home-admin-page/home-admin-page.component"
import {CreateAdminPage} from "./create-admin-page/create-admin-page.component"
import {CreateSubjectPage} from "./create-subject-page/create-subject-page.component"

export const LoggedInPage = () =>{
    const [navigationData] = useState([
        {
            linkName: "Home",
            linkAddress: "/loggedin",
            linkSubMenu: false
            
        },


        {
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
            linkName: "For Student",
            linkAddress: "",
            linkSubMenu: true,
            subMenuLi: [
                {
                    linkAddress: "/admin",
                    linkName: "Enroll Student",
                    linkSubMenu: true,
                    subMenuLi: [
                        {
                            linkAddress: "/admin",
                            linkName: "Returning Student",
                            linkSubMenu: false
                            
                        },
                        {
                            linkAddress: "/admin",
                            linkName: "New Student",
                            linkSubMenu: false
                            
                        }
                    ]
                    
                },
                {
                    linkAddress: "/admin",
                    linkName: "Change Student Subjects",
                    linkSubMenu: false
                    
                }
            ]
        },
        {
            linkName: "For Teachers",
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
                    linkAddress: "/admin",
                    linkName: "Create Teacher Account",
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
                        <Route path="/admin/createSubject" component={CreateSubjectPage} />
                    </Switch>
                </div>
            </div>
        </Router>
        
    )
}