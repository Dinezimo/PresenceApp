import React, {useState, useEffect } from 'react';
import Dash1 from "./Dash1";
import ConfirmationDialog from './Confirmation_card';
import Popup from './email_Popup';
import "./D1CardHandeler.css"
import UserProfileCard from './ViewUser';

const D1CardHandling = () => {
    const[removeGroupConfirmation, setRemoveGroupConfirmation] = useState(false);
    const[removeUserConfirmation, setRemoveUserConfirmation] = useState(false);
    const [blur, setBlur] = useState(false);
    const [addUserbymail, setaddUserbymail] = useState(false);
    const [addGroup, setaddGroup] = useState(false);
    const [UserInfosCard, setUserInfosCard] = useState(false);

    return (
        <div className='CHandlerContainer'>
            {removeGroupConfirmation && <ConfirmationDialog onCancel={() => {setRemoveGroupConfirmation(false); setBlur(false)}} title={"Group Removing"} message={"Are you sure to remove this group ?"}/>}
            {removeUserConfirmation && <ConfirmationDialog onCancel={() => {setRemoveUserConfirmation(false); setBlur(false)}} title={"User Removing"} message={"Are you sure to remove this User ?"}/>}
            {addUserbymail && <Popup title={"User adding"} message={"Put your new member mail and submit it"} type={"email"} onSubmit={()=> {}} onReturn={() => {setaddUserbymail(false); setBlur(false)}} placeholder={"hallaMadrid@exemple.con"}/>}
            {addGroup && <Popup title={"New group Creation"} message={"Wanting to expand your institution, you've come to the right place."} type={"text"} onSubmit={()=> {}} onReturn={() => {setaddGroup(false); setBlur(false)}} placeholder={"eg: Cr7fans"}/>}
            {UserInfosCard && <UserProfileCard picture={"./assets/student.webp"} userName={"Nigtcore"} userMail={"Hokage@premature"} onCancel={() => {setUserInfosCard(false); setBlur(false)}}/>}
            <div className={`CH_overlay${blur ? '_blured': ''}`}>
                <Dash1 params={{
                    rmGroup: () => {setRemoveGroupConfirmation(true);setBlur(true)},
                    rmUser: () => {setRemoveUserConfirmation(true); setBlur(true)},
                    addUser: () => {setaddUserbymail(true); setBlur(true)},
                    addGroup: () => {setaddGroup(true); setBlur(true)},
                    viewMember: () => {setUserInfosCard(true); setBlur(true)}}}/>
            </div>
        </div>
    );
}

const Test = () => {
    return (
        <UserProfileCard/>
    );
}
export default D1CardHandling;