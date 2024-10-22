import React, { useState } from "react";
import Search_input from "../Dashbord./search_input";
import DateInput from "../common/DateInput";
import DownloadButton from "../common/download_icone";
import { FaBell, FaBars } from 'react-icons/fa';
import Slider from "../Dashbord./slider";
import './Repport.css';
import MyListItself from "./ListItself";
import Header from "../Header";
import UserProfile from "../user/UserProfile";
import HeaderAnimation from "../HeaderAnimation/HeaderAnimation";

const OneReportRow = ({Reports, onClicke}) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Session Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Group</th>
            <th>Gateway</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {Reports.map((r) => (
            <tr key={r.name} onClick={() => onClicke()}>
              <th>{r.name}</th>
              <th>{r.time}</th>
              <th>{r.date}</th>
              <th>
                <img src={r.profile} alt="Profile" />
                {r.group}
              </th>
              <th>{(r.gateway == 1) ? "QR Code" : "Camera"}</th>
              <th><DownloadButton /></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const OneReportRow2 = ({Reports}) => {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Session Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Group</th>
              <th>Gateway</th>
              <th>Status</th>
            </tr>
          </thead>
          
          <tbody>
            {Reports.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.time}</td>
                <td>{r.date}</td>
                <td>
                  <img src={r.profile} alt="Profile" />
                  {r.group}
                </td>
                <td>{(r.gateway == 1) ? "QR Code" : "Camera"}</td>
                <td className={`Status ${r.status ? "Present" : "Absent"}`}>
                    {r.status ? "Present" : "Absent"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const RepportDashboard = ({ params }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSidebar, setShowSidebar] = useState(false);
  const [MineOrOther, setMineOrOther] = useState(true);
  const [isListing, setIsListing] = useState(false);
  const [isprofile, setIsprofile] = useState(false);
  const [Reports, setReports] = useState([
    { profile: "./assets/autorite.png", name: "Tepitech", time: "08:15", date: "17/06/24", group: "Tatakaé", gateway: 1 },
    { profile: "./assets/autorite.png", name: "Epitcétou", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
    { profile: "./assets/autorite.png", name: "Administrative meeting", time: "18:15", date: "17/06/24", group: "Nakamura", gateway: 2 },
    { profile: "./assets/autorite.png", name: "Follow up", time: "11:15", date: "23/05/24", group: "Genchin", gateway: 2 },
    { profile: "./assets/autorite.png", name: "Review", time: "13:15", date: "14/08/24", group: "Amaterasu", gateway: 1 },
    { profile: "./assets/autorite.png", name: "Solo Stumper", time: "16:15", date: "18/06/24", group: "Hentaii club 🥰😏🙉", gateway: 1 },
    { profile: "./assets/autorite.png", name: "Kick Off", time: "19:15", date: "25/01/24", group: "Barbarossa", gateway: 2 }
  ]);
  const [othersReport, setOtherReport] = useState([
    {status: 1, profile: "./assets/autorite.png", name: "Tepitech", time: "08:15", date: "17/06/24", group: "Tatakaé", gateway: 1 },
    {status: 1, profile: "./assets/autorite.png", name: "Epitcétou", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
    {status: 0, profile: "./assets/autorite.png", name: "Administrative meeting", time: "18:15", date: "17/06/24", group: "Nakamura", gateway: 2 },
    {status: 0, profile: "./assets/autorite.png", name: "Follow up", time: "11:15", date: "23/05/24", group: "Genchin", gateway: 2 },
    {status: 1, profile: "./assets/autorite.png", name: "Review", time: "13:15", date: "14/08/24", group: "Amaterasu", gateway: 1 },
    {status: 0, profile: "./assets/autorite.png", name: "Solo Stumper", time: "16:15", date: "18/06/24", group: "Hentaii club 🥰😏🙉", gateway: 1 },
    {status: 1, profile: "./assets/autorite.png", name: "Kick Off", time: "19:15", date: "25/01/24", group: "Barbarossa", gateway: 2 }
  ]);
  const [userProfile, setUserProfile] = useState(false);

  return (
    <div className="Repport_Container">
      {/*isprofile && <UserProfile bannerPicture={"./assets/autorite.png"} profilePicture={"./assets/autorite.png"} onClose={()=> setIsprofile(false)}/>*/}
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
          <Header objet={<h2>All reports management</h2>} userProfile={"./assets/autorite.png"} onUserProfileClick={() => setUserProfile(true)}/>
        )}
        {!isListing ? (
        <div>
        <div className="Repport_body">
          <div className="repportHead1"></div>
          <button className="MineOrOthers" onClick={() => setMineOrOther(!MineOrOther)}>
            {MineOrOther ? "My Groups Reports" : "Others Groups Reports"}
          </button>
          <ul className="TimeInterval">
            <li>Today</li>
            <li>Week</li>
            <li>Month</li>
          </ul>
        </div>
        <div className="ReportList">
          <div className="ReportListHead">
            <input className="ReportListHead_input" name="text" placeholder="Search name" type="search" />
            <input className="ReportListHead_input" name="text" placeholder="Search group" type="search" />
            <DateInput />
            <select className="Presence_way">
              <option>Camera presence</option>
              <option>QR presence</option>
              <option>All Way</option>
            </select>
          </div>
          <div className="ScrollingPb"> {/*Handle scrolling*/}
            <div className="RepportListRowContainer">
              {MineOrOther ? <OneReportRow Reports={Reports} onClicke={() => setIsListing(true)}/> : <OneReportRow2 Reports={othersReport}/>}
            </div>
          </div>
        </div>
        </div>) : <MyListItself onReturn={() => setIsListing(false)}/>}
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

export default RepportDashboard;
