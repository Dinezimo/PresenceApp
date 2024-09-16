import React, { useState, useEffect } from 'react';
import { FaBell, FaBars } from 'react-icons/fa';
import './Dash1.css';
import ConfirmationDialog from './Confirmation_card';
import Slider from './slider';
import Search_input from './search_input';
import { useNavigate } from 'react-router';
import Powerlever from './Interrupteur';
import { FaPaperPlane } from 'react-icons/fa';

const Dash1 = ({params}) => {
    const [groups, setGroups] = useState([
        { photo: './assets/utilisateur.png', name: "Groupe1" },
        { photo: './assets/utilisateur.png', name: "Groupe2" },
        { photo: './assets/utilisateur.png', name: "Groupe3" },
        { photo: './assets/utilisateur.png', name: "Groupe4" }
    ]);
    const [member_group, setMember_groups] = useState([
        { photo: './assets/utilisateur.png', name: "Groupe1" },
        { photo: './assets/utilisateur.png', name: "Groupe2" },
        { photo: './assets/utilisateur.png', name: "Groupe3" },
        { photo: './assets/utilisateur.png', name: "Groupe4" }
    ]);
    const [members, setMembers] = useState([
        { photo: './assets/utilisateur.png', name: "Israel" },
        { photo: './assets/utilisateur.png', name: "Charlie" },
        { photo: './assets/utilisateur.png', name: "Abelle" },
        { photo: './assets/utilisateur.png', name: "Adil"}
    ]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

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
    const [isOn, setIsOn] = useState(true);
    return (
        <div className="my_container">
            {!isMobile && <Slider ind={2} />}
            {isMobile && (
                <div className="navbar">
                    <FaBars onClick={() => setShowSidebar(!showSidebar)} />
                    <h2>Institution Name Dashboard</h2>
                    <FaBell className="notification-icon" />
                </div>
            )}
            {showSidebar && isMobile && <Slider ind={2} />}
            <div className="no_slider">
                {!isMobile && (
                    <div className="header">
                        <h2>Institution Name Dashboard</h2>
                        <div className='Notification-profile'>
                            <div className='image'>
                                <img src='./assets/autorite.png' alt="Authority" onClick={() => {params.group_profile_card()}}/>
                            </div>
                            <FaBell className="notification-icon"/>
                        </div>
                    </div>
                )}
                <div className="body">
                    {(!isMobile || !selectedGroup) && (
                        <div className="group_card">
                            <div className="card-head">
                                <Powerlever top={"My Groups"} down={"Others Group"} isOn={isOn} setIsOn={setIsOn}/>
                                <div className="card_head_Right">
                                    <Search_input ind={1} />

                                    {isOn ? <div className="Add_button" onClick={() => {params.addGroup(); console.log("won da mo")}}>
                                        <input type="checkbox" />
                                        <div className="btn" />
                                        <div className="tooltip">
                                            <svg />
                                            <span>Hello World</span>
                                        </div>
                                        <svg />
                                    </div> : (
                                    <button className="flight-button" onClick={() => params.joinagroup()}>
                                        <FaPaperPlane className="iconn" />
                                        <span className="landing-message">Join another group</span>
                                    </button>
                                    )}
                                </div>
                            </div>
                            {isOn && (
                            <div className="card-body">
                                {groups.map((g, index) => (
                                    <div className="Row" key={index} onClick={() => {handleGroupSelect(g)}}>
                                        <div className="group_infos">
                                            <img src={g.photo} alt={g.name} />
                                            <h2>{g.name}</h2>
                                        </div>
                                        <button className="button" onClick={() => {params.rmGroup()}}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 69 14"
                                                className="svgIcon bin-top"
                                            >
                                                <g clipPath="url(#clip0_35_24)">
                                                    <path
                                                        fill="black"
                                                        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_35_24">
                                                        <rect fill="white" height={14} width={69} />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 69 57"
                                                className="svgIcon bin-bottom"
                                            >
                                                <g clipPath="url(#clip0_35_22)">
                                                    <path
                                                        fill="black"
                                                        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.488166 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.488166 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_35_22)">
                                                        <rect fill="white" height={57} width={69} />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            )}
                        {!isOn && (
                            <div className="card-body">
                            {member_group.map((g, index) => (
                                <div className="Row" key={index} onClick={() => params.viewgroup()}>
                                    <div className="group_infos">
                                        <img src={g.photo} alt={g.name} />
                                        <h2>{g.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    )}
                    {selectedGroup && isOn && (
                        <div className="userCard userCard1">
                            <div className="card-head">
                                <h2>Your Members</h2>
                                <div className="card_head_Right">
                                    <div className='group_profile_icon' onClick={() => params.group_profile_card()}>
                                        <img src='./assets/autorite.png'></img>
                                    </div>
                                    <Search_input ind={1} />
                                    <div className="Add_button" onClick={params.addUser}>
                                        <input type="checkbox" />
                                        <div className="btn" />
                                        <div className="tooltip">
                                            <svg />
                                            <span>Hello World</span>
                                        </div>
                                        <svg />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {members.map((m, index) => (
                                    <div className="Row" key={index}>
                                        <div className="group_infos" onClick={()=>{params.viewMember()}}>
                                            <img src={m.photo} alt={m.name} />
                                            <h2>{m.name}</h2>
                                        </div>
                                        <button className="button" onClick={() => {params.rmUser()}}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 69 14"
                                                className="svgIcon bin-top"
                                            >
                                                <g clipPath="url(#clip0_35_24)">
                                                    <path
                                                        fill="black"
                                                        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_35_24">
                                                        <rect fill="white" height={14} width={69} />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 69 57"
                                                className="svgIcon bin-bottom"
                                            >
                                                <g clipPath="url(#clip0_35_22)">
                                                    <path
                                                        fill="black"
                                                        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.488166 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.488166 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_35_22)">
                                                        <rect fill="white" height={57} width={69} />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                ))}
                            </div>
                            {isMobile && (
                                <button className="return-button" onClick={handleReturn}>
                                    Return
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const Test_components = () => {
    return (<ConfirmationDialog title={'User_removing'} message={"Are you sure to remove this user ?"}/>);
}

export default Dash1;
