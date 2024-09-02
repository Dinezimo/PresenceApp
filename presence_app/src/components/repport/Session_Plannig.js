import React, { useState } from "react";
import Search_input from "../Dashbord./search_input";
import { LiaQrcodeSolid } from "react-icons/lia";
import { RiPhoneCameraFill } from "react-icons/ri";
import DateInput from "../common/DateInput";
import OneSessionTable from "./OneSessionNameRow";
import Slider from "../Dashbord./slider";
import './SessionPlanning.css'
import './AddSession.css'
import Header from "../Header";

const AddCessionInPlan = ({onCancel}) => {
    const [groups, setGroups] = useState([
      {profile: "./assets/advancedpack.jpg", GroupName: "Royalty"},
      {profile: "./assets/advancedpack.jpg", GroupName: "Dreaming"},
      {profile: "./assets/advancedpack.jpg", GroupName: "Unstoppable"},
      {profile: "./assets/advancedpack.jpg", GroupName: "Nightcore"},
      {profile: "./assets/advancedpack.jpg", GroupName: "CR7Fans"},
      {profile: "./assets/advancedpack.jpg", GroupName: "Underground"},
    ]);
    const [selectedGateway, setSelectedGateway] = useState(null);

    const handleGatewaySelect = (gateway) => {
      setSelectedGateway(gateway);
    };
    
    return (
      <div className="add-cession-plan-container">
        <div className="add-cession-form">
          <div className="session-name">
            <h2>Your Session Name</h2>
            <input className="session-name-input" type="text" placeholder="Review Meeting" />
          </div>
          <div className="group-selection">
            <h2>Choose your Groups</h2>
            <select className="group-dropdown">
              {groups.map((g, index) => (
                <option key={index} value={g.GroupName}>
                  {g.GroupName}
                </option>
              ))}
            </select>
          </div>
          <div className="gateway-selection">
          <h2>Gateway</h2>
          <div
            className={`gateway-option ${selectedGateway === 'qr' ? 'selected' : ''}`}
            onClick={() => handleGatewaySelect('qr')}
          >
            <LiaQrcodeSolid />
            <h2>By QR code</h2>
          </div>
          <div
            className={`gateway-option ${selectedGateway === 'camera' ? 'selected' : ''}`}
            onClick={() => handleGatewaySelect('camera')}
          >
            <RiPhoneCameraFill />
            <h2>With your device camera</h2>
          </div>
        </div>
          <div className="session-time">
            <DateInput />
            <input className="time-input" type="time" />
          </div>
          <div className="session-buttons">
            <button className="add-session-button">Add Session</button>
            <button className="cancel-session-button" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  const SessionPlanning = () => {
    const [sessions, setSessions] = useState([
      { profile: "./assets/autorite.png", name: "Tepitech", time: "08:15", date: "17/06/24", group: "Tatakaé", gateway: 1 },
      { profile: "./assets/autorite.png", name: "Epitcétou", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "Teckmarathon", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "hentai", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 1 },
      { profile: "./assets/autorite.png", name: "unbreakable", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "lousoooo", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 1 },
      { profile: "./assets/autorite.png", name: "BestNigtvore", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "Mamamiaaaa", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "HenryDanger", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 1 },
      { profile: "./assets/autorite.png", name: "Cr7Fans", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "SolutionMaker", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "woopzibidooo", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "Maudiatdebarcelonnais", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 2 },
      { profile: "./assets/autorite.png", name: "HallahMadrid", time: "09:15", date: "15/12/24", group: "TaicoTeam", gateway: 1 },
    ]);
  
    const handleIntervalClick = (interval) => {
        setActiveInterval(interval);
    };
    const [isAdding, setIsAdding] = useState(false);
    const [activeInterval, setActiveInterval] = useState('Today');
  
    return (
      <div className="session-planning-container">
        <Slider ind={2} />
        {!isAdding ? (
          <div className="session-planning">
            <Header userProfile={'./assets/autorite.png'}></Header>
            <div className="report-body">
              <div className="report-head"></div>
              <button className="add-button" onClick={() => setIsAdding(true)}>Add Session</button>
              <ul className="time-interval">
                {['Today', 'Week', 'Month'].map((interval) => (
                    <li
                        key={interval}
                        className={activeInterval === interval ? 'active' : ''}
                        onClick={() => handleIntervalClick(interval)}
                    >
                        {interval}
                    </li>
                ))}
            </ul>
            </div>
            <div className="report-list">
              <div className="report-list-head">
                <input className="report-list-head-input" name="text" placeholder="Search name" type="search" />
                <input className="report-list-head-input" name="text" placeholder="Search group" type="search" />
                <DateInput />
                <select className="presence-way">
                  <option>Camera presence</option>
                  <option>QR presence</option>
                  <option>All Way</option>
                </select>
              </div>
              <OneSessionTable sessions={sessions} onRemove={() => console.log("Session removed")} />
            </div>
          </div>
        ) : (
          <AddCessionInPlan onCancel={() => setIsAdding(false)} />
        )}
      </div>
    );
  };
  
export default SessionPlanning;