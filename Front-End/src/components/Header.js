import React, { useState } from 'react';
import './Header.css';
import { IoIosNotifications } from 'react-icons/io';
import Notification from './Notification/Notification';
import { BiMenu } from 'react-icons/bi';

const NotificationIcon = ({ unreadCount, onNotificationClick }) => {
  // Display "9+" if the count is greater than 9
  const displayCount = unreadCount > 9 ? '9+' : unreadCount;

  return (
    <div className="notification-icon" onClick={onNotificationClick} style={{ position: 'relative', cursor: 'pointer' }}>
      <IoIosNotifications size={24} />
      {unreadCount > 0 && (
        <span className="notification-badge">
          {displayCount}
        </span>
      )}
    </div>
  );
};

const Header = ({objet, userProfile, onUserProfileClick, setIsSidebarOpen}) => {
    const [isNotif, setIsNotif] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const onNotificationClick = () => {
        setIsNotif(true);
    }
    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <div className='header-left_Obj'>
                      {objet}
                    </div>
                    <div className='header-left_BarT' onClick={() => setIsSidebarOpen(true)}>
                      {<BiMenu/>}
                    </div>
                </div>
                <div className="header-right">
                    <img
                        src={userProfile}
                        alt="User Profile"
                        className="user-profile"
                        onClick={onUserProfileClick}
                    />
                    <NotificationIcon unreadCount={unreadCount} onNotificationClick={() => setIsNotif(true)}/>
                </div>
            </header>
            {isNotif && <Notification OnCancel={() => setIsNotif(false)}/>}
        </div>
    );
};

export default Header;