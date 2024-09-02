import React, { useState } from "react";
import "./ListItself.css" 

const MyListItself = ({onReturn}) => {
  const [list] = useState([
    { status: 1, profile: "./assets/Boss.jpg", name: "Wassim Karim", mail: "WassimKarim@mail.com" },
    { status: 0, profile: "./assets/Boss.jpg", name: "Kamal Haris", mail: "KamalHaris@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "Dine Zimo", mail: "DineZimo@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "Pablo Escobar", mail: "PabloEscobar@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "Natacha DelaVégas", mail: "NatachaDelaVégas@mail.com" },
    { status: 0, profile: "./assets/Boss.jpg", name: "Karmen Sandiego", mail: "KarmenSandiego@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "livai Ackerman", mail: "livaiAckerman@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "Cristiano Ronalde", mail: "CristianoRonalde@mail.com" },
    { status: 0, profile: "./assets/Boss.jpg", name: "Lieonel Messi", mail: "Lieonelmessi@mail.com" },
    { status: 0, profile: "./assets/Boss.jpg", name: "Kwasoko Djawad", mail: "KwasokoDjawad@mail.com" },
    { status: 1, profile: "./assets/Boss.jpg", name: "Dimitrio Mendossah", mail: "DimitrioMendossah@mail.com" },
  ]);            

  const [showInfoCard, setShowInfoCard] = useState(false);
  const handleInfoClick = () => {
    setShowInfoCard(!showInfoCard);
  };

  return (
    <div className="ListItselfContainer">
      <h1 className="ListTitle">Attendance Report</h1>
      <div className="ListItselfContainerBody">
        <div className="ListItselfExportRow">
            <button className="ListItselfGobackButton" onClick={()=> onReturn()}>Goback</button>
          <button className="Informations" onClick={handleInfoClick}>
            Informations
          </button>
          <button className="Export">Export</button>
        </div>
        <div className="TableScrollContainer">
          <table className="MyListTable">
            <thead>
              <tr>
                <th>Member</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {list.map((l, index) => (
                <tr className="MyListTableRow" key={index}>
                  <td>
                    <img src={l.profile} alt={l.name} className="ProfileImage" />
                    {l.name}
                  </td>
                  <td>{l.mail}</td>
                  <td className={`Status ${l.status ? "Present" : "Absent"}`}>
                    {l.status ? "Present" : "Absent"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showInfoCard && (
          <div className="InfoCard">
            <h2>Session Information</h2>
            <p><strong>Session Name:</strong> Monthly Review</p>
            <p><strong>Group:</strong> Development Team</p>
            <p><strong>Date:</strong> August 30, 2024</p>
            <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
            <p><strong>Gateway:</strong> Main Office Gateway</p>
            <p><strong>Attendance Rate:</strong> 85%</p>
            <button className="CloseButton" onClick={handleInfoClick}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListItself;
