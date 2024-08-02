import React, {useState} from "react";
import './login.css'
import axios from "axios";

const Login_page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const turn_visibility = () => {
        setVisible(!visible);
    }

    const handle_login = async(e) => {
        e.preventDefault();
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {email, password});
            localStorage.setItem('token', res.data);
            window.location.href = '/Home' ;
        } catch (error) {
            if (error.res) {
                switch(error.res.status) {
                    case 400:
                        setErrorMessage("Email and password are required");
                    case 401:
                        setErrorMessage(error.res.data.message);
                    default:
                        setErrorMessage("An error occured. Please try again");
                }
            } else
            setErrorMessage("An error occured. Please try again");
        }
    }
    return (
        <div className="back">
            <div className="Login_page">
                <div className="Login_bloc">
                    <div className="Logo_place">
                        <img src='logo512.png' alt="Logo" />
                    </div>
                    <div className="titre">
                        <h2>Login in your account</h2>
                        <h3>Let's get started!</h3>
                    </div>
                    <form className="login_form" onSubmit={handle_login}>
                        <div className="form-group">
                            <label>Email</label>
                            <div className="my_mail">
                                <input
                                    type="email"
                                    className="input email"
                                    placeholder="Put a mail. EX:emailryokitenkai@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="mail_icon">
                                    <span className="material-symbols-outlined">
                                        mail
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <div className="pass">
                                <input
                                    type={visible ? 'text' : 'password'}
                                    className="input password"
                                    placeholder="Put your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="visibility" onClick={turn_visibility}>
                                    <span className="material-symbols-outlined on">
                                        {visible ? 'visibility' : 'visibility_off'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="bottons">
                            <button type="submit">Login</button>
                            <button><a href="/login/google">Continue with Google</a></button>
                        </div>
                    </form>
                    <div className="go_login">
                        <h3>Don't have an account?</h3>
                        <a href="/register">Send Register request</a>
                    </div>
                </div>
                <div className="illustration">
                    <img className="Login_carricature_block" src="login_back.png" alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Login_page;