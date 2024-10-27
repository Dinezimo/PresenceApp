import React, { useState } from 'react';
import InviteCollaborators from './InviteCollaborators'; // Component to handle the invite flow
import './Setting.css'
import { FaUserGroup } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import { IoExitOutline } from 'react-icons/io5';
import UserProfile from '../user/UserProfile';

const SettingsPage = () => {
    const [phoneNumber, setPhoneNumber] = useState(''); // Store user phone number
    const [isExternalNotifications, setIsExternalNotifications] = useState(true);
    const [isSMSActive, setIsSMSActive] = useState(false);
    const [showInviteCard, setShowInviteCard] = useState(false);
    const [inviteStatus, setInviteStatus] = useState(null); // Tracks success/failure
    const [isprofile, setIsprofile] = useState(false);

    const NavTo = useNavigate();


    // Handle phone number input and reset SMS toggle if phone number is removed
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        if (e.target.value === '') setIsSMSActive(false);
    };

    const handleInviteClick = () => {
        setShowInviteCard(true);
        setInviteStatus(null); // Reset invite status for a new invite
    };

    return (
        <div className='SettngPageContainer'>
        <div className="settings-page">
            <h2>Settings</h2>

            <div className="settings-option profile" onClick={() => setIsprofile(true)}>
                <img src='./assets/autorite.png' alt="User Profile" />
                <h3>My Profile</h3>
            </div>

            <div className="settings-option InviteFriend" onClick={handleInviteClick}>
                <FaUserGroup />
                <h3>Invite New Collaborators</h3>
            </div>

            {showInviteCard && (
                <InviteCollaborators
                    setInviteStatus={setInviteStatus}
                    onClose={() => setShowInviteCard(false)}
                />
            )}

            {inviteStatus && (
                <div className={`invite-status-card ${inviteStatus}`}>
                    {inviteStatus === 'success' ? 'Invitation sent successfully!' : 'Failed to send invitation.'}
                </div>
            )}

            <div className="settings-option">
                <label>
                    <input
                        type="checkbox"
                        checked={isExternalNotifications}
                        onChange={() => setIsExternalNotifications(!isExternalNotifications)}
                        />
                </label>
                <h3>External Notifications</h3>
            </div>

            <div className="settings-option SMS">
                <h3>Phone Number for SMS Notifications</h3>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <button onClick={handleInviteClick}>Set to receive SMS</button>
            </div>

            <div className="settings-option IsSMS">
                <label>
                    <input
                        type="checkbox"
                        checked={isSMSActive}
                        onChange={() => setIsSMSActive(!isSMSActive)}
                        disabled={!phoneNumber} // Disabled unless a phone number is provided
                    />
                    Enable SMS Notifications
                </label>
                {!phoneNumber && <p className="warning-text">Add a phone number to enable SMS notifications.</p>}
            </div>
            <div className="settings-option IoExitOutline" onClick={() => NavTo('/dashboard')}><IoExitOutline/> Return</div>
        </div>
        {isprofile && <UserProfile bannerPicture={"./assets/autorite.png"} profilePicture={"./assets/autorite.png"} onClose={()=> setIsprofile(false)}/>}
        </div>
    );
};

export default SettingsPage;