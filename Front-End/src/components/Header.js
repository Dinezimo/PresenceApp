import React, { useState } from 'react';
import './Header.css';
import { IoIosNotifications } from 'react-icons/io';
import Notification from './Notification/Notification';

const Header = ({objet, userProfile, onUserProfileClick}) => {
    const [isNotif, setIsNotif] = useState(false);
    const onNotificationClick = () => {
        setIsNotif(true);
    }
    return (
        <div>
            <header className="header">
                <div className="header-left">
                    {objet}
                </div>
                <div className="header-right">
                    <img
                        src={userProfile}
                        alt="User Profile"
                        className="user-profile"
                        onClick={onUserProfileClick}
                    />
                    <div className="notification-icon" onClick={() => onNotificationClick()}>
                       <IoIosNotifications/>
                    </div>
                </div>
            </header>
            {isNotif && <Notification OnCancel={() => setIsNotif(false)}/>}
        </div>
    );
};

export default Header;