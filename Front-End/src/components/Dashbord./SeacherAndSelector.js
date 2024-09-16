import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Import return icon
import './SearchAndSelect.css'; // Create this CSS file for styling

const SearchAndSelect = ({ groups, onReturn }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredGroups = groups.filter(group =>
        group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="SearchAndSelectContainer">
            <div className="return-icon" onClick={onReturn}>
                <FaArrowLeft />
            </div>
            <input
                type="text"
                placeholder="Put the group name"
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            <div className="groupsAfterSort">
                {filteredGroups.length > 0 ? (
                    filteredGroups.map((group, index) => (
                        <div key={index} className="group-item">
                            {group}
                        </div>
                    ))
                ) : (
                    <div className="no-results">No groups found</div>
                )}
            </div>
        </div>
    );
};

export default SearchAndSelect;
