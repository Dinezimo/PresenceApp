import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './GroupCard.css'; // Custom styles for GroupCard

const GroupCard = ({ group, onSelect, onDelete }) => {
    return (
        <div className="group-card" onClick={onSelect}>
            <div className='inline'> {/*to make row inline*/}
                <img src={group.photo} alt={`${group.name} Group`} className="group-photo" />
                <h3>{group.name}</h3>
            </div>
            <div className='inline'>
            {onDelete && (
                <FaTrashAlt
                    className="delete-icon"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent click from triggering select
                        onDelete(group.name);
                    }}
                />
            )}
            </div>
        </div>
    );
};

export default GroupCard;