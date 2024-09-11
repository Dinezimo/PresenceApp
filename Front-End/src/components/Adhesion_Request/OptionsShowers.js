import React, { useState } from "react";
import GroupsRequestingMeasaMemberTab from "./GroupsRequestingMeasaMember";
import MyAdhesionRequestTabs from "./MyAdhesionRequest";
import RequestTojoinMygroupTab from "./RequestToJoinMyGroup";
import MyInvitationtoOtherTab from "./MyInvitationToOthers";
import Slider from "../Dashbord./slider";
import Header from "../Header";
import './OptionShower.css'

  const AdhesionOptionshower = () => {
    const [options, setOptions] = useState([
      { placeholder: "My Adhesion Requests", tab: <MyAdhesionRequestTabs />, color: '#007bff' },
      { placeholder: "My Invitations to Others", tab: <MyInvitationtoOtherTab />, color: '#28a745' },
      { placeholder: "Requests to Join My Groups", tab: <RequestTojoinMygroupTab />, color: '#ffc107' },
      { placeholder: "Groups Requesting Me as a Member", tab: <GroupsRequestingMeasaMemberTab />, color: '#dc3545' }
    ]);
  
    // State to track the active tab and color
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Handle click event to change the active tab
    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
    <div className="AdhesionOptionshowerContainerAndSlider">
      <div className="Slider">
        <Slider ind={2}/>
      </div>
      <div className="AdhesionOptionshowerContainer">
        {/* Render the 2x2 grid of option cubes */}
        <Header userProfile="./assets/advancedpack.jpg"/>
        <div className="grid-container">
          {options.map((option, index) => (
            <div
              key={index}
              className={`OptionShowerCube ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              style={{ backgroundColor: option.color }} // Assign unique color to each option
            >
              {option.placeholder}
            </div>
          ))}
        </div>
  
        {/* Render the active tab content with matching color */}
        <div className="tab-content" style={{ borderColor: options[activeIndex].color }}>
          {options[activeIndex].tab}
        </div>
      </div>
      </div>
    );
  };
  
  export default AdhesionOptionshower;
