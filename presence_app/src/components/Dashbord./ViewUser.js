import React from "react";
import "./ViewUser.css";

const UserProfileCard = ({ picture, userName, userMail, onCancel}) => {
  return (
    <div className="UserProfilCard">
      <button className="mail">
        <svg
          className="lucide lucide-mail"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx={2} y={4} x={2} height={16} width={20} />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
      <div className="profile-pic">
        <img src={picture} alt="User profile" />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">{userName}</span>
          <span className="about-me">
            Lorem ipsum dolor sit amet consectetur adipisicinFcls
          </span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            {/* SVG icons for social media links */}
            <svg viewBox="0 0 16 15.999" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                transform="translate(6 598)"
                d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                data-name="Subtraction 4"
                id="Subtraction_4"
              />
            </svg>
          </div>
          <button className="button" onClick={() => {onCancel()}}>Return</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

