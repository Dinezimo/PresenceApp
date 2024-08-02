import React, {useState, useEffect} from 'react';
import axios from 'axios';

const InstitutionSearch = ({ handleInstitutionClick, step, setUser, setInstitution, formData, handleOutsideClick, handleSelectClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [institutions, setInstitutions] = useState([]);
    const [filteredInstitutions, setFilteredInstitutions] = useState([]);
    const [selectedInstitution, setSelectedInstitution] = useState(null);

    const cleanResponse = (responseText) => {
        try {
            const cleanedText = responseText.replace(/^[^\[]+|\]$/, '');
            const parsedData = JSON.parse(cleanedText);
            if (Array.isArray(parsedData)) {
                return parsedData;
            } else {
                console.error('Parsed data is not an array:', parsedData);
                return [];
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchInstitutions = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/search_institution`, {
                    params: { search: searchTerm }
                });
                const cleanedData = cleanResponse(response.request.responseText);
                setInstitutions(cleanedData);
                setFilteredInstitutions(cleanedData);
            } catch (error) {
                console.error('Error fetching institutions:', error);
            }
        };
        if (searchTerm) {
            fetchInstitutions();
        } else {
            setInstitutions([]);
            setFilteredInstitutions([]);
        }
    }, [searchTerm]);
    return (
        <div className="container5" onClick={handleOutsideClick}>
            <div className="image_block">
                <img src="/assets/Teamate.png" alt="Teamate" />
            </div>
            <div className="account_block">
                <h1>Join an Institution</h1>
                <div className="inputs">
                    <span className="material-symbols-outlined">search</span>
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Search for an institution"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="institution-list">
                    {Array.isArray(filteredInstitutions) && filteredInstitutions.length > 0 ? (
                        filteredInstitutions.map((institution) => (
                            <div
                                key={institution.institution_id}
                                className="institution-item"
                                onClick={() => {
                                    setSelectedInstitution(institution);
                                    handleInstitutionClick(institution);
                                }}
                            >
                                <img
                                    src={institution.photo}
                                    alt={`${institution.name} logo`}
                                    className="institution-photo"
                                />
                                <div className="institution-info">
                                    <h2>{institution.name}</h2>
                                    <p>{institution.description.slice(0, 50)}...</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No results found</p>
                    )}
                </div>
                {selectedInstitution && (
                    <div className="institution-details">
                        <h2>{selectedInstitution.name}</h2>
                        <img
                            src={selectedInstitution.photo}
                            alt={`${selectedInstitution.name} logo`}
                        />
                        <p>{selectedInstitution.description}</p>
                        <button
                            onClick={() => {
                                handleSelectClick();
                                step(6);
                                setUser(i => ({
                                    ...i,
                                    name: formData.name,
                                    email: formData.email,
                                    password: formData.password
                                }));
                                setInstitution(i => ({
                                    ...i,
                                    name: selectedInstitution.name
                                }));
                            }}
                        >
                            Select
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
 export default InstitutionSearch;