import React, { useState } from 'react';
import "./OneSessionTable.css"

const InfoCard = ({ session }) => (
    <div className="info-card">
      <h3>Session Details</h3>
      <p><strong>Name:</strong> {session.name}</p>
      <p><strong>Date:</strong> {session.date}</p>
      <p><strong>Time:</strong> {session.time}</p>
      <p><strong>Group:</strong> {session.group}</p>
      <p><strong>Gateway:</strong> {session.gateway === 1 ? 'QR Code' : 'Camera'}</p>
    </div>
  );
  
  const EditCard = ({ session, onCancel }) => (
    <div className="edit-card">
      <h3>Edit Session</h3>
      <form>
        <label>
          Session Name:
          <input type="text" defaultValue={session.name} />
        </label>
        <label>
          Date:
          <input type="date" defaultValue={session.date} />
        </label>
        <label>
          Time:
          <input type="time" defaultValue={session.time} />
        </label>
        <label>
          Group:
          <input type="text" defaultValue={session.group} />
        </label>
        <label>
          Gateway:
          <select defaultValue={session.gateway}>
            <option value={1}>QR Code</option>
            <option value={2}>Camera</option>
          </select>
        </label>
        <div className="action-buttons">
          <button type="submit" className="session-edit-button">Save</button>
          <button type="button" className="session-remove-button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );

const OneSessionTable = ({ sessions, onRemove }) => {
    const [selectedSession, setSelectedSession] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [clickedRowIndex, setClickedRowIndex] = useState(null); 
  
    const handleRowClick = (session, index) => {
        if (clickedRowIndex === index) {
          setSelectedSession(null);
          setClickedRowIndex(null);
        } else {
          setSelectedSession(session);
          setClickedRowIndex(index);
          setIsEditing(false);
        }
      };
  
    const handleEditClick = (session) => {
      setSelectedSession(session);
      setIsEditing(true);
    };

    const handleEditCancel = () => {
      setIsEditing(false);
    };
  
    return (
      <div className="Sessiontable-container">
        <table className="session-table">
          <thead>
            <tr>
              <th>Session Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Group</th>
              <th>Gateway</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(session, index)}>
                  <td>{session.name}</td>
                  <td>{session.date}</td>
                  <td>{session.time}</td>
                  <td>
                    <img src={session.profile} alt="Profile" />
                    {session.group}
                  </td>
                  <td>{session.gateway === 1 ? 'QR Code' : 'Camera'}</td>
                  <td className="action-buttons">
                    <button
                      className="session-edit-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(session);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="session-remove-button"
                      onClick={() => onRemove(session)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
  
                {selectedSession && clickedRowIndex === index && !isEditing && (
                  <tr>
                    <td colSpan="6">
                      <InfoCard session={selectedSession} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
  
        {selectedSession && isEditing && (
          <div className="edit-card-overlay">
            <EditCard session={selectedSession} onCancel={handleEditCancel} />
          </div>
        )}
      </div>
    );
};

export default OneSessionTable;