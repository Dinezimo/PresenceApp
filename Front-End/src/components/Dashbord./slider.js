import React, {useState, useEffect} from 'react';
import { FaTachometerAlt, FaFileAlt, FaUser, FaBell, FaSignOutAlt, FaBars, FaArrowLeft } from 'react-icons/fa';
import { BiSolidBusiness } from 'react-icons/bi';
import { FaPeopleRoof } from 'react-icons/fa6';
import { CiViewList } from 'react-icons/ci';
import './slider.css';
import {useNavigate} from 'react-router';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { CgCalendar } from 'react-icons/cg';

const Sidebar = ({ menuItems }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const NavTo = useNavigate();

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
                <h2>Presence app</h2>
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

const Slider = ({ ind }) => {
    const menuItems1 = [
        { label: 'Dashboard', icon: <FaTachometerAlt /> },
        { label: 'Institutions', icon: <FaPeopleRoof /> },
        { label: 'Reports', icon: <FaFileAlt /> },
        { label: 'Profile', icon: <FaUser /> },
        { label: 'Adhesion Requests', icon: <FaBell /> },
        { label: 'Notifications', icon: <FaSignOutAlt /> }
    ];

    const menuItems2 = [
        {label: 'Home', icon: <FaHome/>, link:  "/dashboard" },
        {label: 'Groupes', icon: <FaPeopleRoof/>, link: "/dashboard"},
        {label: 'Scan Session Qr code', icon: <MdOutlineQrCodeScanner/>, link: "/dashboard"},
        {label: 'Launch presence', icon: <FaFileAlt/>, link: "/LaunchPresence"},
        {label: 'Session Planning', icon: <CiViewList/>,  link: "/PlanSession"},
        {label: 'Reports', icon: <TbReport />, link: "/UserReport"},
        {label: 'Adhesion Requests', icon: <FaRegAddressBook />, link: "/AdhesionRequest"},
        {label: 'Calendar', icon: <CgCalendar />, link: "/AdhesionRequest"},
    ];

    return <Sidebar menuItems={ind === 1 ? menuItems1 : menuItems2} />;
};

export default Slider;
