import React, { useState } from "react";
import Search_input from "../Dashbord./search_input";
import { LiaQrcodeSolid } from "react-icons/lia";
import { RiPhoneCameraFill } from "react-icons/ri";
import Slider from "../Dashbord./slider";
import { FaChevronDown,  FaChevronUp} from "react-icons/fa";
import "./LauchPresence.css";
import Header from "../Header";
import UserProfile from "../user/UserProfile";

const LaunchPresence = () => {
    const [group, setGroup] = useState([
        { profile: "./assets/advancedpack.jpg", GroupName: "Royalty" },
        { profile: "./assets/advancedpack.jpg", GroupName: "Kings" },
    ]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedGateway, setSelectedGateway] = useState(null);
    const [userProfile, setUserProfile] = useState(false);

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
        setIsDropdownOpen(false);
    };

    const handleGatewaySelect = (gateway) => {
        setSelectedGateway(gateway);
    };

    return (
        <div className="LaunchPresenceContainerAndSlider">
            <Slider ind={2} />
            <div className="LaunchPresenceContainer">
                <Header objet={<div><h2>Launch a Attendance session</h2></ div>} userProfile={"./assets/advancedpack.jpg"} onUserProfileClick={() => {setUserProfile(true)}}/>
                <div className="LaunchPresenceSesionName">
                    <h2>Your Session Name</h2>
                    <input className="LaunchPresenceSesionNameInput" type="text" placeholder="Review Meeting" />
                </div>
                <div className="LaunchPresenceSesionGroup">
                    <h2>Choose Your Group</h2>
                    <div className="custom-dropdown">
                        <div
                            className="custom-dropdown-header"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {selectedGroup ? (
                                <>
                                    <img src={selectedGroup.profile} alt="Group profile" />
                                    <span>{selectedGroup.GroupName}</span>
                                </>
                            ) : (
                                <span>Select a group</span>
                            )}
                            {isDropdownOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
                        </div>
                        {isDropdownOpen && (
                            <div className="custom-dropdown-list">
                                {group.map((g, index) => (
                                    <div
                                        key={index}
                                        className="custom-dropdown-item"
                                        onClick={() => handleGroupSelect(g)}
                                    >
                                        <img src={g.profile} alt="Group profile" />
                                        <span>{g.GroupName}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="launchPresenceSessionGateway">
                    <h2>Gateway</h2>
                    <div
                        className={`gateway-option ${selectedGateway === 'qr' ? 'selected' : ''}`}
                        onClick={() => handleGatewaySelect('qr')}
                    >
                        <LiaQrcodeSolid />
                        <h2>By QR Code</h2>
                    </div>
                    <div
                        className={`gateway-option ${selectedGateway === 'camera' ? 'selected' : ''}`}
                        onClick={() => handleGatewaySelect('camera')}
                    >
                        <RiPhoneCameraFill />
                        <h2>With Your Device Camera</h2>
                    </div>
                </div>

                <button className="StartPresence">Start</button>
            </div>
            {userProfile && <UserProfile
                bannerPicture={'./assets/advancedpack.jpg'}
                profilePicture={'./assets/autorite.png'}
                userName={'Free Palestine'}
                userEmail={'dadadam@freepalestine'}
                onClose={() => {setUserProfile(false)}}/>
            }
        </div>
    );
};

export default LaunchPresence;