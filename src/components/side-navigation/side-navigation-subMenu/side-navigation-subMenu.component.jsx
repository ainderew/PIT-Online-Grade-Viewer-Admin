import React from "react"
import "./side-navigation-subMenu.style.css"
// import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"
import {SubLi} from "../sub-li/sub-li.component"

export const SubMenu = (props) =>{

    console.log(props.subMenuLi)
    return(
        <ul className="subMenu">
           {props.subMenuLi.map(li=> <SubLi linkAddress={li.linkAddress} linkName={li.linkName} subMenuLogic={li.linkSubMenu} subMenuLi={li.subMenuLi}   />)}
        </ul>
    )
}