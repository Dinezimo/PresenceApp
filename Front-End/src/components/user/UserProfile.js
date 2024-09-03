import React, {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import  './UserProfile.css'

const UserProfile = ({ bannerPicture, profilePicture, userName, userEmail, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Taico");
  const [email, setEmail] = useState("GoatCR7@exemple.com");
  const [banner, setBanner] = useState(bannerPicture || "./assets/group.jpg");
  const [profile, setProfile] = useState(profilePicture || "./assets/freepack.jpg");

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleSave = () => setIsEditing(false);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="UserProfile">
      <div className="exit-icon" onClick={onClose}>
        <FaTimes />
      </div>
      <div className="banner">
        <label htmlFor="banner-upload">
          <img src={banner} alt="Banner" className="banner-image" />
        </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={() => {handleBannerChange()}}
            />
      </div>
      <div className="profile-container">
        <label htmlFor="profile-upload" className="profile-pic">
          <img src={profile} alt="Profile" />
        </label>
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={() => {handleProfileChange()}}
        />
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
