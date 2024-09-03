import React from "react";

const Head = (msg) => {

    return (
        <div className="container">
            <div className="msg"><h2>${msg}</h2></div>
            <div className="notif">
                <FaSignOutAlt/>
                <img src="./assets/Teamate.png" alt="user_profile"></img>
            </div>
        </div>
    );
}

export default Head;