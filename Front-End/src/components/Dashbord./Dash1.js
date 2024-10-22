import React, { useState, useEffect } from 'react';
import GroupCard from './GroupCard'; // Ensure you have this component
import MemberCard from './MemberCard'; // Ensure you have this component// Ensure you have this component
import SearchInput from './search_input' // Ensure you have this component
import { FaPaperPlane } from 'react-icons/fa';
import Slider from './slider';
import Header from '../Header';
import PowerLever from './Interrupteur.js'
import './Dash1.css'
import {TbTruckReturn} from 'react-icons/tb';
import UserProfile from '../user/UserProfile.js';

const Dash1 = ({ params }) => {
    const [groups, setGroups] = useState([
        { photo: './assets/utilisateur.png', name: "Groupe1" },
        { photo: './assets/utilisateur.png', name: "Groupe2" },
        { photo: './assets/utilisateur.png', name: "Groupe3" },
        { photo: './assets/utilisateur.png', name: "Groupe4" },
        { photo: './assets/utilisateur.png', name: "Groupe5" },
        { photo: './assets/utilisateur.png', name: "Groupe6" },
        { photo: './assets/utilisateur.png', name: "Groupe7" },
        { photo: './assets/utilisateur.png', name: "Groupe8" },
        { photo: './assets/utilisateur.png', name: "Groupe9" },
        { photo: './assets/utilisateur.png', name: "Groupe10" },
        { photo: './assets/utilisateur.png', name: "Groupe11" },
        { photo: './assets/utilisateur.png', name: "Groupe12" },

    ]);

    const [memberGroups, setMemberGroups] = useState([
        { photo: './assets/utilisateur.png', name: "Groupe1" },
        { photo: './assets/utilisateur.png', name: "Groupe2" },
        { photo: './assets/utilisateur.png', name: "Groupe3" },
        { photo: './assets/utilisateur.png', name: "Groupe4" },
        { photo: './assets/utilisateur.png', name: "Groupe5" },
        { photo: './assets/utilisateur.png', name: "Groupe6" },
        { photo: './assets/utilisateur.png', name: "Groupe7" },
        { photo: './assets/utilisateur.png', name: "Groupe8" },
        { photo: './assets/utilisateur.png', name: "Groupe9" },
        { photo: './assets/utilisateur.png', name: "Groupe10" },
        { photo: './assets/utilisateur.png', name: "Groupe11" },
        { photo: './assets/utilisateur.png', name: "Groupe12" },
    ]);

    const [members, setMembers] = useState([
        { photo: './assets/utilisateur.png', name: "Israel" },
        { photo: './assets/utilisateur.png', name: "Charlie" },
        { photo: './assets/utilisateur.png', name: "Abelle" },
        { photo: './assets/utilisateur.png', name: "Adil" }
    ]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [userProfile, setUserProfile] = useState(false);
    const [activeGroupType, setActiveGroupType] = useState('My Groups');
    const [isOn, setIsOn] = useState(true); // Power lever state

    // Handle window resizing to toggle mobile view
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
    };

    const handleReturn = () => {
        setSelectedGroup(null);
    };

    return (
        <div className='Dash1Container'>
        {<Slider ind={2} />}
        <div className="dash-container">
            <Header
                objet={<h2>Group Dashboard</h2>}
                userProfile={'./assets/Boss.jpg'}
                onUserProfileClick={() => setUserProfile(true)}
            />
            <div className="Thecontent">
                {!selectedGroup && (
                    <div className="group-card-container">
                        <div className="card-header">
                            <PowerLever
                                top="My Groups"
                                down="Other Groups"
                                isOn={isOn}
                                setIsOn={setIsOn}
                            />
                            <div className="actions-right">
                                <SearchInput ind={1} />
                                {isOn ? (
                                    <div
                                        className="add-group-btn"
                                        onClick={params.addGroup}
                                    >
                                        <span className="tooltip-text" data-tooltip="Add Group">Add Group</span>
                                    </div>
                                ) : (
                                    <button
                                        className="join-group-btn"
                                        onClick={params.joinagroup}
                                    >
                                        <FaPaperPlane className="Flight-icon" />
                                        <span className='landing-message'>Join a Group</span>
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='card-body'>
                        <div className="card-bodyToSetScroll"> {/*To solve scrolling problem*/}
                            {(isOn ? groups : memberGroups).map((group, index) => (
                                <GroupCard
                                    key={index}
                                    group={group}
                                    onSelect={() => {if (isOn) handleGroupSelect(group); if (!isOn) params.viewgroup()}}
                                    onDelete={isOn ? params.rmGroup : undefined}
                                />
                            ))}
                        </div>
                        </div>
                    </div>
                )}
                {selectedGroup && isOn && (
                    <div className="member-card-container">
                        <div className="card-header">
                        <button
                            className="join-group-btn"
                            onClick={() => setSelectedGroup(false)}
                        >
                            <TbTruckReturn className="Return-icon" />
                            <span className='landing-message'>Go back</span>
                        </button>
                            <h2>{selectedGroup.name} Members</h2>
                            <div className="actions-right">
                                <img
                                    src='./assets/autorite.png'
                                    alt="Group Profile"
                                    onClick={params.groupProfileCard}
                                    className="group-profile-icon"
                                />
                                <SearchInput ind={1} />
                                <div className="add-user-btn" onClick={params.addUser}>
                                    <span className="tooltip-text" data-tooltip="Add User">Add User</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {members.map((member, index) => (
                                <MemberCard
                                    key={index}
                                    member={member}
                                    onView={() => params.viewMember()}
                                    onDelete={() => params.rmUser()}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        {userProfile && <UserProfile bannerPicture={''} profilePicture={'./assets/Boss.jpg'} userName={'Squezzie tread horreur'} onClose={() => setUserProfile(false)}/>}
        </div>
    );
};

export default Dash1;
