import React, { useState, useEffect } from 'react';
import { FaTachometerAlt, FaFileAlt, FaUser, FaBell, FaSignOutAlt, FaBars, FaArrowLeft } from 'react-icons/fa';
import { BiSolidBusiness } from 'react-icons/bi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { CiViewList } from 'react-icons/ci';
import './slider.css';

const Sidebar = ({ menuItems }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="Container">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <h2>Institution Manager</h2>
                <nav>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>{item.icon} {item.label}</li>
                        ))}
                    </ul>
                </nav>
                <button className="logout-button">Log out</button>
            </div>
        </div>
    );
};

const Slider = ({ ind }) => {
    const menuItems1 = [
        { label: 'Dashboard', icon: <FaTachometerAlt /> },
        { label: 'Institutions', icon: <FaPeopleGroup /> },
        { label: 'Reports', icon: <FaFileAlt /> },
        { label: 'Profile', icon: <FaUser /> },
        { label: 'Adhesion Requests', icon: <FaBell /> },
        { label: 'Notifications', icon: <FaSignOutAlt /> }
    ];

    const menuItems2 = [
        { label: 'Home', icon: <FaTachometerAlt /> },
        { label: 'Groupes', icon: <BiSolidBusiness /> },
        { label: 'Reports', icon: <FaBell /> },
        { label: 'Lunch presence', icon: <FaFileAlt /> },
        { label: 'Session Planning', icon: <CiViewList /> },
        { label: 'Adhesion Requests', icon: <FaBell /> },
    ];

    return <Sidebar menuItems={ind === 1 ? menuItems1 : menuItems2} />;
};

export default Slider;
