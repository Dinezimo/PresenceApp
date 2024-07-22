import React, { useState } from "react";

const InstitutionType = ({step, ichange}) => {
    return (
        <div>
            <div className="question1">
                <h2>Welcome, what brings you ???</h2>
                <div className="check_list">
                    <div className="check c1">
                        <input type="checkbox" onChange={() => ichange('Travail')}></input>
                        <h3>Travail</h3>
                    </div>
                    <div className="check c2">
                        <input type="checkbox" onChange={() => ichange('Etudes')}></input>
                        <h3>Etudes</h3>
                    </div>
                    <div className="check c3">
                        <input type="checkbox" onChange={() => ichange('Personnel')}></input>
                        <h3>Personnel</h3>
                    </div>
                </div>
            </div>
            <div className="question2">
                <h2>How would you describe your current institution?</h2>
                <div className="check_list">
                    <div className="check c1">
                        <input type="checkbox" onChange={() => ichange('Entreprise')}></input>
                        <h3>Entreprise</h3>
                    </div>
                    <div className="check c2">
                        <input type="checkbox" onChange={() => ichange('School')}></input>
                        <h3>School or Campus</h3>
                    </div>
                    <div className="check c3">
                        <input type="checkbox" onChange={() => ichange('Other')}></input>
                        <h3>Others</h3>
                    </div>
                </div>
            </div>
            <button onClick={() => step(1)}>Continue</button>
            <h3>Do you have an account?</h3>
            <a href="/login">Login</a>
        </div>
    );
};

const UserStatus = ({type, step}) => {
    return (
        <div className="container1">
            <h1>Begin With Niska</h1>
            <h3>Choose your role</h3>
            <div className="role_container r1">
                <img src={(type === 'Entreprise' || type === 'Other') ? './assets/student.webp' :  './assets/employés.jpg'} alt="employé"></img>
                <h2>I am a member</h2>
                <p>Join a workspace as a team member</p>
            </div>
            <div className="role_container r2">
                <img src={(type === 'School') ? './assets/Boss.jpg' : './assets/Director.webp'} alt="admin"></img>
                <h2>I am an admin</h2>
                <p>Create a new institution to handle your team's time and attendance</p>
            </div>
            <button onClick={() => step(2)}>Continue</button>
            <h3>Do you have an account?</h3>
            <a href="/login">Login</a>
        </div>
    );
};

const CreateNewAccount = (step) =>
{
    const [visible, setVisible] = useState(false);
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [is_config, setIs_config] = useState(0);
    return (
    <div>
        <div className="bloc_image">
            <img src="./assets/vecteezy_teamwork-or-team-building-office-business-meeting-vector_4154417-removebg-preview.png"></img>
        </div>
        <div className="bloc_register">
            <h1>Create a new account</h1>
            <div className="inputs">
                <input type="text" placeholder="Full name" value={mail} onChange={(e) => {setMail(e.target.value); setIs_config(is_config + 1)}}></input>
                <input type="email" placeholder="E-mail" value={name} onChange={(e) => {setName(e.target.value); setIs_config(is_config + 1)}}></input>
                <div className="pass">
                    <input type={(visible) ? "text" : "password"} placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value); setIs_config(is_config + 1)}}></input>
                    <div className="icon" onClick={() => {setVisible((visible) ? true : false)}}>
                        <span className="material-symbols-outlined on">
                            {(visible) ? `visibility` : `visibility_off`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="Confidentiality">
                <input type="checkbox" onChange={()=>{setIs_config(true)}}></input>
                <p>I allow <a onClick={()=>{alert("pas encore dévellopé"); console.log("no yet developped")}}>Using Conditions</a>and<a onClick={()=>{alert("pas encore dévellopé"); console.log("no yet developped")}}>Confidentiality politique</a> de Niska</p>
            </div>
            <button onClick={() => {if (is_config == 4) {step(2)} else {alert("champs non terminé"); console.log(is_config)}}}>Continue</button>
            <h3>Do you have an account?</h3>
            <a href="/login">Login here</a>
        </div>
    </div>
    );
}

const Institution_inform = (step) =>
{
    //country_setting and domain and table
    return (
        <div>
            <div className="bloc_img">
                <img src=""></img>
            </div>
            <div className="bloc_inst">
                <h1>Tell me about your institutions</h1>
                <h3>Help me to Create a best user experience for you</h3>
                <div className="inputs">
                    <input className="name" placeholder="Institution name"></input>
                    <input className="country "></input>
                    <input className="phone_number"></input>
                    <input className="domain"></input>
                </div>
            </div>
            <button>Continue</button>
        </div>
    )
}

// send message to mail + login+ dashbord
const Register = () => {
    const [step, setStep] = useState(0);
    const [institutionStatus, setInstitutionStatus] = useState('');

    const myChange = (status) => {
        setInstitutionStatus(status);
    };

    switch (step) {
        case 0:
            return <InstitutionType step={setStep} ichange={myChange} />;
        case 1:
            return <UserStatus type={institutionStatus} step={setStep} />;
        case 2:
            return <CreateNewAccount step={setStep}/>
        case 3:
            return <Institution_inform step = {setStep}/>
        default:
            return null;
    }
};

export default Register;
