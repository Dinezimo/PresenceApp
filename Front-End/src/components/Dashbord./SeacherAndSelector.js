import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Import return icon
import './SearchAndSelect.css'; // Create this CSS file for styling
import SuccesOrFailor from '../SuccessAndfailCard/SuccesAndFailorCard';

const SearchAndSelect = ({ groups, onReturn }) => {
    const [searchTerm, setSearchTerm] = useState(''); /* input that will be used to filter information*/
    const [groupname, setGroupname] = useState('Séniorita'); /*to contain selected group name*/
    const [result, setResult] = useState('noresult'); /*it can be success, failor, noresult, noRegistered*/

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const SendRequest = () => {
        setResult('Failor');
    }
    const filteredGroups = groups.filter(group =>
        group.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='SearchAndSelectContainerWithResult'>
            {result == 'noresult' && (<div className="SearchAndSelectContainer">
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
                            <div key={index} className="group-item" onClick={() => SendRequest()}>
                                <div className='group_profile_container'>
                                    <img className='group_profile_img' src='./assets/autorite.png'></img>
                                </div>
                                {group}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No groups found</div>
                    )}
                </div>
            </div>)}
            {result == "success" && (
                <SuccesOrFailor ind={1} msg={`A adhesion request to join ${groupname} have been sent to group admin`} onOkClick={() => onReturn()}/> /*Success card */
            )}
            {result == "Failor"  &&
                <SuccesOrFailor ind={0} msg={`An error has occurred when we tried to join ${groupname} Check Connection and Start again!`} onOkClick={() => onReturn()}/> /*Failor card */
            }
        </div>
    );
};

export default SearchAndSelect;
