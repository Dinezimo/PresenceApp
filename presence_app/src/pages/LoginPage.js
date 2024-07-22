import React, {useState} from "react";
import './login.css'

const Login_page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const turn_visibility = () => {
        setVisible(!visible);
    }
    return (
        <div className="back">
        <div className="Login_page">
            <div className="Login_bloc">
            <div className="Logo_place">
                <img src ='logo512.png'></img>
            </div>
            <div className="titre">
                <h2>Login in your account</h2>
                <h3>Let's get started!</h3>
            </div>
                <form className="login_form">
                <div className="form-group">
                    <label>Email</label>
                        <div className="my_mail">
                            <input type="email" className="input email" placeholder="Put a mail. EX:emailryokitenkai@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
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
                    <input type={(visible) ? `text` : `password`} className="input password" placeholder="Put your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <div className="visibility" onClick={turn_visibility}>
                        <span className="material-symbols-outlined on">
                            {(visible) ? `visibility` : `visibility_off`}
                        </span>
                    </div>
                    </div>
                </div>
                </form>
                <div className="bottons">
                    <button>Login</button>
                    <button><a>Continue with Google</a></button>
                </div>
                <div className="go_login">
                    <h3>Already have on account? </h3>
                    <a href="/">Send Register request</a>
                </div>
            </div>
            <div className="illustration">
                <img className="Login_carricature_block" src="login_back.png"></img>
            </div>
        </div>
        </div>
    );
}

export default Login_page;