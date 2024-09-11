import React, { useState } from "react";

const MyInvitationtoOtherTab = () => {
  const [Invitations, setInvitations] = useState([
      {group: "groupe 1", time: "08/08/2015", name: "Latino", date: "17:05", status: "Rejected"},
      {group: "groupe 3", time: "08/08/2015", name: "Carramba", date: "14:08", status: "Pending"},
      {group: "groupe 3", time: "08/08/2015", name: "Attiéké", date: "17:04", status: "Accepted"},
      {group: "groupe 4", time: "08/08/2015", name: "Alloco", date: "17:02", status: "Pending"},
      {group: "groupe 5", time: "08/08/2015", name: "NameOfLove", date: "12:05", status: "Pending"},
      {group: "groupe 5", time: "08/08/2015", name: "Nouvelleécole", date: "09:15", status: "Rejected"},
      {group: "groupe 7", time: "08/08/2015", name: "AdiosAmigos", date: "08:05", status: "Accepted"},
      {group: "groupe 8", time: "08/08/2015", name: "smartness", date: "04:24", status: "Pending"},
      {group: "groupe 9", time: "08/08/2015", name: "AxelMeryl", date: "07:46", status: "Rejected"},
  ]);

  return (
      <div className="MyInvitationtoOtherTabContainer">
          <h3>Sent Invitations</h3>
          <table className="request-table tab2">
            <thead>
              <tr>
                <th>My Group</th>
                <th>User Name</th>
                <th>Date Sent</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Invitations.map((r, index) => (
                <tr key={index}>
                  <td>{r.group}</td>
                  <td>{r.name}</td>
                  <td>{r.time}</td>
                  <td>{r.date}</td>
                  <td className={`status ${r.status.toLowerCase()}`}>
                    <span className="status-icon"></span>
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
  );
};


export default MyInvitationtoOtherTab;