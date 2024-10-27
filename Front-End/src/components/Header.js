import React from 'react';
import './Header.css';
import { IoIosNotifications } from 'react-icons/io';

const Header = ({ objet, userProfile, onUserProfileClick, onNotificationClick }) => {
    return (
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
                <div className="notification-icon" onClick={onNotificationClick}>
                   <IoIosNotifications/>
                </div>
            </div>
        </header>
    );
};

export default Header;