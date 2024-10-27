import React, { useState } from 'react';

const InviteCollaborators = ({ setInviteStatus, onClose }) => {
    const [email, setEmail] = useState('');

    const handleInvite = () => {
        // Mockup invite process (In real application, call API and handle response)
        const success = Math.random() > 0.5; // Mock success/failure response
        setInviteStatus(success ? 'success' : 'failure');
        onClose(); // Close invite card after processing
    };

    return (
        <div className="invite-card">
            <h3>Invite a Collaborator</h3>
            <input
                type="email"
                placeholder="Enter collaborator's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='MailInput'
            />
            <button onClick={handleInvite}>Send Invitation</button>
            <button onClick={onClose} className="close-btn">Cancel</button>
        </div>
    );
};

export default InviteCollaborators;
