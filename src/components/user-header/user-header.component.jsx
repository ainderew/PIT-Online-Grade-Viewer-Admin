import React from "react";
import "./user-header.style.css"
import {useSelector} from "react-redux"
import {UserPicture} from "../user-header/user-picture/user-picture.component"
import {UserInfo} from "../user-header/user-information/user-info.component"
import {NotificationButton} from "./notification-button/notification-button.component"
import NotificationSVG from "../../assets/notification.svg"
import AlertSVG from "../../assets/alert.svg"
import MessageSVG from "../../assets/message.svg"

export const UserHeader = () =>{

  const userInfo = useSelector(state => state.userInfo)

  // const userInfo
  return(
    <div className="user-header-container">
      <div className="left-user-header">
        <UserPicture className="userPhotoHeader" path={userInfo.idPicture}/>
        <UserInfo userData={userInfo}/>
      </div>

      <div className="right-user-header">
        
       
        <NotificationButton icon={NotificationSVG} accessibility="notification" notificationType="Notifications" notificationIndicator={userInfo.notificationNumber} notificationList={userInfo.notificationList}/>
        <NotificationButton icon={AlertSVG} accessibility="alert" notificationType="Alerts" notificationIndicator={userInfo.alertNumber} notificationList={userInfo.alertList} />
        <NotificationButton icon={MessageSVG} accessibility="message" notificationType="Messages" notificationIndicator={userInfo.messageNumber} notificationList={userInfo.messageList} />
        
      </div>
    </div>
  )
}