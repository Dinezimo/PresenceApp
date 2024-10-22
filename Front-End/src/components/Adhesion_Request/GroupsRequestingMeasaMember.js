import React, {useState} from "react";


const GroupsRequestingMeasaMemberTab = () => {
    const [JoinOther, setJoinOther] = useState([
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        {HisGroup: "Mumon", time: "80/06/05", date: "10:05"},
        ]);
    return (
        <div className="GroupsRequestingMeasaMemberContainer">
            <h3>Manage Requests</h3>
                <table class="request-table tab1">
                  <thead>
                    <tr>
                      <th>Requested Group</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JoinOther.map((j) => (
                        <tr>
                            <td>{j.HisGroup}</td>
                            <td>{j.time}</td>
                            <td>{j.date}</td>
                            <td className="acptAndRefuseButton">
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

export default GroupsRequestingMeasaMemberTab;