import React, {useState, useEffect} from 'react';
import { FaTachometerAlt, FaFileAlt, FaUser, FaBell, FaSignOutAlt, FaBars, FaArrowLeft } from 'react-icons/fa';
import { BiSolidBusiness } from 'react-icons/bi';
import { FaPeopleRoof } from 'react-icons/fa6';
import { CiViewList } from 'react-icons/ci';
import './slider.css';
import {useNavigate} from 'react-router';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { FaHome} from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';
import { TbReport, TbXboxX} from 'react-icons/tb';
import { CgCalendar } from 'react-icons/cg';

const Sidebar = ({ menuItems, onReturn }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOut, setMenuOut] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const NavTo = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="Container">
            <div className={`sidebar ${menuOut ? 'SlidebarOut' : ''}`}>
                <div className='SidebarHead'>
                    <div onClick={() => {onReturn();setMenuOut(true)}}><TbXboxX/></div>
                    <h2>Presence app</h2>
                </div>
                <nav>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} onClick={() => {NavTo(`${item.link}`); setIsSelected(!isSelected)}} className={isSelected ? `Selectionned` : ``}><div>{item.icon} {item.label}</div></li>
                        ))}
                    </ul>
                </nav>
                <button className="logout-button">Log out</button>
            </div>
        </div>
    );
};

const Slider = ({ onReturn }) => {
    const menuItems = [
        {label: 'Home', icon: <FaHome/>, link:  "/ComingSoon" },
        {label: 'Groupes', icon: <FaPeopleRoof/>, link: "/dashboard"},
        {label: 'Scan Session Qr code', icon: <MdOutlineQrCodeScanner/>, link: "/ComingSoon"},
        {label: 'Launch presence', icon: <FaFileAlt/>, link: "/LaunchPresence"},
        {label: 'Session Planning', icon: <CiViewList/>,  link: "/PlanSession"},
        {label: 'Reports', icon: <TbReport />, link: "/UserReport"},
        {label: 'Adhesion Requests', icon: <FaRegAddressBook />, link: "/AdhesionRequest"},
        {label: 'Calendar', icon: <CgCalendar />, link: "/ComingSoon"},
        {label: 'Settings', icon: <CgCalendar />, link: "/Settings"},
    ];

    return <Sidebar menuItems={menuItems} onReturn={onReturn}/>;
};

export default Slider;
