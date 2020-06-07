import React from "react"
import "./sub-sub-menu.style.css"
import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"

export const SubsubMenu = (props) =>{

    return(
        <ul className="subSubMenu">
           {props.subMenuLi.map(li=> <SideNavLi linkAddress={li.linkAddress} linkName={li.linkName} subMenuLogic={li.linkSubMenu} subMenuLi={li.subMenuLi} submenuClassName="nav-li nav-li-active"  />)}
        </ul>
    )
}