import React, {useState} from "react";
import './Register.css'
import axios from "axios";
import { useNavigate } from "react-router";

const Register_form = () => {
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [pass, SetPass] = useState([false, false, false, false]);
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const nav = useNavigate();

    const handlepass = (nb) => {
        const newpass = [...pass];
        newpass[nb] = true;
        SetPass(newpass);
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
      const handleContinue = () => {
        if (!user.name || !user.email || !user.password || !pass[0]) {
            setErrorMessage('Please fill in all fields and agree to the terms.');
        } else {
            registeruserindatabase()
        }
    };

    const registeruserindatabase = async() => {
        let req_body = {name: user.name, email: user.email, password: user.password};
        try {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/Register`, req_body);
        let responseData = res.data;
        if (typeof responseData === 'string') {
            const prefix = '/Register';
            if (responseData.startsWith(prefix)) {
                responseData = responseData.substring(prefix.length);
            }
            responseData = JSON.parse(responseData);
        }
        if (responseData.error) {
            console.log(responseData.error);
            setErrorMessage(responseData.error);
        }
        else {
            console.log("User have been registered sucessfifully");
            setErrorMessage('');
            nav("/Register");
        }
    } catch (error) {
        if (error) {
            console.log("An issues are occured during the process", error)
        }
    }
    }
    return (
        <div className="container2">
        <div className="image-block">
            <img src="s/Teamate.png" alt="Teamwork" />
        </div>
        <div className="register-block">
            <h1>Create a new account</h1>
            <div className="inputs">
                <InputField 
                    type="text" 
                    name="name" 
                    placeholder="Full name" 
                    value={user.name} 
                    onChange={(e) => { handleChange(e); handlepass(1)}} 
                />
                <InputField 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    value={user.email} 
                    onChange={(e) => {handleChange(e); handlepass(2)}} 
                />
                <div className="pass">
                    <InputField 
                        type={visible ? "text" : "password"} 
                        name="password" 
                        placeholder="Password" 
                        value={user.password} 
                        onChange={(e) => {handleChange(e); handlepass(3)}} 
                    />
                    <span className="toggle-visibility material-symbols-outlined icon" onClick={() => setVisible(!visible)}>
                        {visible ? 'visibility' : 'visibility_off'}
                    </span>
                </div>
            </div>
            <Checkbox label="I agree to the Terms and Conditions" handlepass={handlepass} />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button onClick={handleContinue}>Continue</button>
            <div className="login-container">
                <span>Do you have an account?</span>
                <a href="/login">Login</a>
            </div>
        </div>
    </div>
    );
}

const InputField = ({ type, name, placeholder, value, onChange }) => (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
);

const Checkbox = ({label, handlepass}) => (
    <div className="checkbox">
        <input type="checkbox" onChange={() => handlepass(0)}/>
        <label>{label}</label>
    </div>
);

export default Register_form;