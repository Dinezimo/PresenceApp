import React, { useState } from "react";
import {redirect} from "react-router";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaPersonBooth, FaPersonShelter} from "react-icons/fa6";
import { TfiCommentsSmiley, } from "react-icons/tfi";
import { TbXboxX } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import './Notification.css'

const Notification = ({OnCancel}) => {
    const [notification, setNotification] = useState([
        {data: {name: 'Bola Accambi', Mygroup: 'Ladybug'}, redirecto: '/AdhesionRequest', type: 'AR', id: 1},
        {data: {IVTgroup: 'PlayWithFire'}, redirecto: '/AdhesionRequest', type: 'IVT', id: 1},
        {data: {name: 'shaley', JGrgroup: 'Bien être'}, redirecto: '/AdhesionRequest', type: 'JGr', id: 1},
        {data: {msg: 'Vous avez une cession dans 2 min'}, redirecto: '/Calendar', type: 'OTH', id: 1},
    ]);
    return (
        <div className="NotificationContainer">
            <div className="overlay"></div>
            <div className="ExitIcon" onClick={() => {OnCancel()}}><TbXboxX/></div>
            <div className="NList">
            <span className="NotifTitle">
                <div>
                    <IoIosNotifications/>
                </div>
                <h3>Notifications</h3>
            </span>
                {notification.map( (notif) => (
                    <div className="NlistRows" onClick={redirect(`${notif.redirecto}`)}>
                        {notif.type === 'AR' && (
                            <div className="NlistRow">
                                <div><MdOutlinePersonAddAlt/></div>
                                <h5>{notif.data.name} would like join your group {notif.Mygroup}</h5>
                            </div>
                        )}
                        {notif.type === 'IVT' && (
                            <div className="NlistRow">
                                <div><FaPersonBooth/></div>
                                <h5>{notif.data.IVTgroup} invite you to join him</h5>
                            </div>
                        )}
                        {notif.type === 'JGr' && (
                            <div className="NlistRow">
                            <   div><FaPersonShelter/></div>
                            <   h5>{notif.data.name} join your group {notif.data.JGrgroup}</h5>
                            </div>
                        )}
                        {(
                            notif.type === 'OTH' && (
                                <div className="NlistRow">
                                    <div><TfiCommentsSmiley/></div>
                                    <h5>{notif.data.msg}</h5>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification