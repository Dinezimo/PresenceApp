// MemberCard.js
import React from 'react';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import './MemberCard.css';

const MemberCard = ({ member, onView, onDelete }) => {
    return (
        <div className="member-card">
            <img src={member.photo} alt={`${member.name}`} className="member-photo" />
            <h3>{member.name}</h3>
            <div className="member-actions">
                <FaEye className="view-icon" onClick={onView} />
                <FaTrashAlt
                    className="delete-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(member.name);
                    }}
                />
            </div>
        </div>
    );
};

export default MemberCard;
