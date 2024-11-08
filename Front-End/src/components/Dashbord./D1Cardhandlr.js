import React, {useState, useEffect } from 'react';
import Dash1 from "./Dash1";
import ConfirmationDialog from './Confirmation_card';
import Popup from './email_Popup';
import "./D1CardHandeler.css"
import UserProfileCard from './ViewUser';
import BulkCard from './BulkCard';
import UserProfile from '../user/UserProfile';
import SearchAndSelect from './SeacherAndSelector';
import SuccesOrFailor from '../SuccessAndfailCard/SuccesAndFailorCard';

const D1CardHandling = () => {
    const[removeGroupConfirmation, setRemoveGroupConfirmation] = useState(false);
    const[removeUserConfirmation, setRemoveUserConfirmation] = useState(false);
    const [blur, setBlur] = useState(false);
    const [addUserbymail, setaddUserbymail] = useState(false);
    const [addGroup, setaddGroup] = useState(false);
    const [UserInfosCard, setUserInfosCard] = useState(false);
    const [GroupInfosCard, setGroupInfosCard] = useState(false);
    const [addUserBulking, setaddUserBulking] = useState(false);
    const [addGroupBulking, setaddGroupBulking] = useState(false);
    const [UserProfileCard_, setUserProfileCard_] = useState(false);
    const [GroupProfileCard_, setGroupProfileCard_] = useState(false);
    const [isJoinning, setIsJoining] = useState(false);
    const [CreationGroupCard, setCreationGroupCard] = useState(false);

    return (
        <div className='CHandlerContainer'>
            {removeGroupConfirmation && <ConfirmationDialog onCancel={() => {setRemoveGroupConfirmation(false); setBlur(false)}} title={"Group Removing"} message={"Are you sure to remove this group ?"}/>}
            {removeUserConfirmation && <ConfirmationDialog onCancel={() => {setRemoveUserConfirmation(false); setBlur(false)}} title={"User Removing"} message={"Are you sure to remove this User ?"}/>}
            {addUserbymail && <Popup title={"User adding"} message={"Put your new member mail and submit it"} type={"email"} onSubmit={()=> {}} onReturn={() => {setaddUserbymail(false); setBlur(false)}} placeholder={"hallaMadrid@exemple.con"} onBulk={() => {setaddUserBulking(true); setBlur(true); setaddUserbymail(false)}} action={"addPeople"}/>}
            {addGroup && <Popup title={"New group Creation"} message={"Wanting to expand your institution, you've come to the right place."} type={"text"} onSubmit={()=> {}} onReturn={() => {setaddGroup(false); setBlur(false)}} placeholder={"eg: Cr7fans"} onBulk={()=>{alert('Not available'); setBlur(false);setaddGroup(false)}} action={"SuccessOrFailor"}/>}
            {UserInfosCard && <UserProfileCard picture={"./assets/student.webp"} userName={"Nigtcore"} userMail={"Hokage@premature"} onCancel={() => {setUserInfosCard(false); setBlur(false)}}/>}
            {addGroupBulking && <BulkCard img_template={"./xlx_docs/BulkGroupAddTemplate.png"} onReturn={()=> {setaddGroupBulking(false); setBlur(false)}} downloadable={"./xlx_docs/BulkGroupAddTemplate.xlsx"}/>}
            {addUserBulking && <BulkCard img_template={"./xlx_docs/BulkUserAddTemplate.png"} onReturn={()=> {setaddUserBulking(false); setBlur(false)}} downloadable={"./xlx_docs/BulkUserAddTemplate.xlsx"}/>}
            {GroupProfileCard_ && <UserProfile onClose={() => {setGroupProfileCard_(false); setBlur(false)}}/>}
            {GroupInfosCard && <UserProfileCard picture={"./assets/student.webp"} userName={"Nigtcore"} userMail={"Hokage@premature"} onCancel={() => {setGroupInfosCard(false); setBlur(false)}}/>}
            {isJoinning && <SearchAndSelect groups={["tiakola", "ninho", "Ashaké", "burnaboy", "Omarlay", "Zebra", "Mhobad", "DidiB", "Himra"]} onReturn={() => {setIsJoining(false); setBlur(false)}}/>}
            <div className={`CH_overlay${blur ? '_blured': ''}`}></div>
                <Dash1 params={{
                    rmGroup: () => {setRemoveGroupConfirmation(true);setBlur(true)},
                    rmUser: () => {setRemoveUserConfirmation(true); setBlur(true)},
                    addUser: () => {setaddUserbymail(true); setBlur(true)},
                    addGroup: () => {setaddGroup(true); setBlur(true)},
                    group_profile_card: () => {setGroupProfileCard_(true); setBlur(true)},
                    user_profile_card:  () => {setUserProfileCard_(true); setBlur(true)},
                    viewgroup:  () => {setGroupInfosCard(true); setBlur(true)},
                    viewMember: () => {setUserInfosCard(true); setBlur(true)},
                    joinagroup: () => {setIsJoining(true); setBlur(true); console.log('mamaman')}}}/>
        </div>
    );
}

const Test = () => {
    return (
        <UserProfileCard/>
    );
}
export default D1CardHandling;