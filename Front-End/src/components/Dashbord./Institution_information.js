import React from "react";7
import {FaArrowLeft} from "react-icons/fa";

const Institution_infos = () => {

    return (
        <div className="container">
                <div className="return_icon">
                    <FaArrowLeft />
                </div>
                <div className="body">
                <div className="head">
                    <img src="./assets/institution.png"></img>
                    <h2>Institution name</h2>
                </div>
                <div className="Description">
                    <p>Lorem ipsum ..............</p>
                </div>
            </div>
        </div>
    );
}