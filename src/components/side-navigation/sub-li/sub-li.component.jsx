import React from "react"
import "./sub-li.style.css"
import {SubsubMenu} from "../sub-sub-menu/sub-sub-menu.component"

export const SubLi = (props) =>{
    const subMenuLogic = props.subMenuLogic;
    const subMenuLi = props.subMenuLi
    return(
        <li className="nav-sub-li"><a href={props.linkAddress}> {props.linkName}</a> {subMenuLogic?<SubsubMenu className="subSubMenu" subMenuLi={subMenuLi} />: null}</li>
       
    )
}