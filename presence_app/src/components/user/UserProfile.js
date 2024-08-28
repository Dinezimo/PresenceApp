import React, {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import  './UserProfile.css'

const UserProfile = ({ bannerPicture, profilePicture, userName, userEmail, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Taico");
  const [email, setEmail] = useState("GoatCR7@exemple.com");

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="UserProfile">
      <div className="exit-icon" onClick={onClose}>
        <FaTimes />
      </div>
      <div className="banner">
        <img src={"./assets/group.jpg"} alt="Banner" className="banner-image" />
      </div>
      <div className="profile-container">
        <div className="profile-pic">
          <img src={"./assets/freepack.jpg"} alt="Profile" />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <div className="edit-fields">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="edit-input"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="edit-input"
              />
              <button onClick={handleSave} className="save-button">Save</button>
            </div>
          ) : (
            <div className="info">
              <h1 className="name">{name}</h1>
              <p className="email">{email}</p>
              <button onClick={handleEditToggle} className="edit-button">
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
