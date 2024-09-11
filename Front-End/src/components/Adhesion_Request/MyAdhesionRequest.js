import React, { useState } from "react";

const MyAdhesionRequestTabs = () => {
  const [Request, setRequest] = useState([
      {time: "09/08/2020", name: "Latino", date: "08/08/2024", status: "Rejected"},
      {time: "09/08/2020", name: "Carramba", date: "14:08", status: "Pending"},
      {time: "09/08/2020", name: "Attiéké", date: "17:04", status: "Accepted"},
      {time: "09/08/2020", name: "Alloco", date: "17:02", status: "Pending"},
      {time: "09/08/2020", name: "NameOfLove", date: "12:05", status: "Pending"},
      {time: "09/08/2020", name: "Nouvelleécole", date: "09:15", status: "Rejected"},
      {time: "09/08/2020", name: "AdiosAmigos", date: "08:05", status: "Accepted"},
      {time: "09/08/2020", name: "smartness", date: "04:24", status: "Pending"},
      {time: "09/08/2020", name: "AxelMeryl", date: "07:46", status: "Rejected"},
  ]);

  return (
    <div className="MyAdhesionRequestTabsContainer tab4">
      <h3>Pending Requests</h3>
      <table className="request-table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Date Sent</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Request.map((r, index) => (
                <tr key={index}>
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


export default MyAdhesionRequestTabs;