import React, { useState } from "react";

const RequestTojoinMygroupTab = () => {
    const [JoinMe, setJoinMe] = useState([
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {userName: "KennV Emilie", HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        ]);
    return (
        <div className="RequestTojoinMygroupTabContainer">
             <h3>Manage Requests</h3>
                <table class="request-table tab3">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Requested Group</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JoinMe.map((j) => (
                        <tr>
                            <td>{j.userName}</td>
                            <td>{j.HisGroup}</td>
                            <td>{j.time}</td>
                            <td>{j.date}</td>
                            <td>
                              <button class="accept-btn">Accept</button>
                              <button class="decline-btn">Reject</button>
                            </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
        </div>
    );
}

export default RequestTojoinMygroupTab;