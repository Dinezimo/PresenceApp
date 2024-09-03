import React from 'react';
import './Header.css';

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
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zM17.414 16c-.045-2.005-1.298-3.807-3.072-4.365V9.5c0-.812-.657-1.469-1.469-1.469-.812 0-1.469.657-1.469 1.469v2.135c-1.807.574-3.069 2.384-3.066 4.365H6.586c-.372-.941-.59-1.958-.59-3.007v-1.993c0-4.418 3.582-8 8-8s8 3.582 8 8v1.993c0 1.049-.218 2.066-.59 3.007h-1.972zM12 3c-3.315 0-6 2.685-6 6v1.999c0 1.235-.416 2.441-1.11 3.418-.124.146-.225.306-.288.482-.125.433-.202.881-.225 1.335-.021.392-.023.787-.008 1.17C5.446 17.105 8.692 20 12 20c3.308 0 6.554-2.895 6.443-5.928-.015-.383-.013-.779.008-1.171-.023-.453-.1-.902-.226-1.335-.063-.176-.164-.336-.288-.482-.694-.977-1.11-2.183-1.11-3.418V9c0-3.315-2.685-6-6-6z" fill="#000"/>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;