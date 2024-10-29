import React from 'react';
import './ComingSoonPage.css';

const ComingSoonPage = () => {
    return (
        <div className="coming-soon-page">
            <div className="content">
                <h1 className="message">This functionality is not available for the moment</h1>
                <img src={'./assets/industrie_type.png '} alt="Coming Soon Illustration" className="vector-image" />
                <button className="go-button" onClick={() => alert('Returning...')}>Go back</button>
            </div>
        </div>
    );
};

export default ComingSoonPage;
