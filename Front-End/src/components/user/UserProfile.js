import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './UserProfile.css';

const UserProfile = ({ bannerPicture, profilePicture, userName, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userName || "Gordon Ramsay");
  const [banner, setBanner] = useState(bannerPicture || "./assets/group.jpg");
  const [profile, setProfile] = useState(profilePicture || "./assets/freepack.jpg");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);  // Show the card with animation on mount
  }, []);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file)); // Update the banner image
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file)); // Update the profile image
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved:", { name, banner, profile });
  };

  return (
    <>
      <div className={`UserProfile ${isVisible ? 'slide-in' : ''}`}>
        <div 
          className="card_background_img" 
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div 
          className="card_profile_img hover-effect" 
          style={{ backgroundImage: `url(${profile})` }}
        />

        {isEditing ? (
          <div className="edit_section">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            />
            <div className="input_wrapper">
              <label className="input_label">Change Banner Image:</label>
              <input type="file" accept="image/*" onChange={handleBannerChange} className="file_input"/>
            </div>
            <div className="input_wrapper">
              <label className="input_label">Change Profile Image:</label>
              <input type="file" accept="image/*" onChange={handleProfileChange} className="file_input"/>
            </div>
            <div className="profil_edit_btn">
              <div className="p_btn hover-btn" onClick={handleSave}>Save</div>
              <div className="p_btn hover-btn" onClick={() => setIsEditing(false)}>Cancel</div>
            </div>
          </div>
        ) : (
          <>
            <div className="user_details">
              <h3>{name}</h3>
              <p>{`Master Chef`}</p>
            </div>
            <div className="profil_edit_btn">
              <div className="p_btn hover-btn" onClick={() => setIsEditing(true)}>Edit</div>
              <div className="p_btn hover-btn" onClick={() => onClose()}>Close</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
