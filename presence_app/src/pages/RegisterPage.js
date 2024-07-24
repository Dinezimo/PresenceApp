import React, { useState } from "react";
import './RegisterPage.css'
import Confetti from 'react-confetti';
import { useSpring, animated } from '@react-spring/web';

const InstitutionType = ({ step, ichange }) => {
    return (
        <div className="container">
            <div className="image_bloc">
                <img src="assets/industrie_type.png" alt="Industry Type" />
            </div>
            <div className="InstitutionType_">
                <div className="question1">
                    <h2>Welcome, what brings you?</h2>
                    <div className="check_list">
                        <div className="check c1">
                            <input type="checkbox" onChange={() => ichange('Travail')} />
                            <h3>Travail</h3>
                        </div>
                        <div className="check c2">
                            <input type="checkbox" onChange={() => ichange('Etudes')} />
                            <h3>Etudes</h3>
                        </div>
                        <div className="check c3">
                            <input type="checkbox" onChange={() => ichange('Personnel')} />
                            <h3>Personnel</h3>
                        </div>
                    </div>
                </div>
                <div className="question2">
                    <h2>How would you describe your current institution?</h2>
                    <div className="check_list">
                        <div className="check c1">
                            <input type="checkbox" onChange={() => ichange('Entreprise')} />
                            <h3>Entreprise</h3>
                        </div>
                        <div className="check c2">
                            <input type="checkbox" onChange={() => ichange('School')} />
                            <h3>School or Campus</h3>
                        </div>
                        <div className="check c3">
                            <input type="checkbox" onChange={() => ichange('Other')} />
                            <h3>Others</h3>
                        </div>
                    </div>
                </div>
                <button onClick={() => step(1)}>Continue</button>
                <div className="login-section">
                    <span>Do you have an account?</span>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

const UserStatus = ({type, step}) => {
    const [selectedRole, setSelectedRole] = useState(null);
    const handleRoleClick = (role) => {
        setSelectedRole(role);
    };
    return (
        <div className="container1">
            <h1>Begin With Niska</h1>
            <h3>Choose your role</h3>
            <div className="role_containers">
                <div 
                    className={`role_container r1 ${selectedRole === 'member' ? 'selected' : ''}`}
                    onClick={() => handleRoleClick('member')}
                >
                    <img src={(type === 'Entreprise' || type === 'Other') ? './assets/student.webp' : './assets/employés.jpg'} alt="employé" />
                    <h2>I am a member</h2>
                    <p>Join a workspace as a team member</p>
                </div>
                <div 
                    className={`role_container r2 ${selectedRole === 'admin' ? 'selected' : ''}`}
                    onClick={() => handleRoleClick('admin')}
                >
                    <img src={(type === 'School') ? './assets/Boss.jpg' : './assets/Director.webp'} alt="admin" />
                    <h2>I am an admin</h2>
                    <p>Create a new institution to handle your team's time and attendance</p>
                </div>
            </div>
            <button onClick={() => step(2)}>Continue</button>
            <h3>Do you have an account?</h3>
            <a href="/login">Login</a>
        </div>
    );
};

const CreateNewAccount = ({ step }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [visible, setVisible] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container2">
            <div className="image-block">
                <img src="./assets/Teamate.png" alt="Teamwork" />
            </div>
            <div className="register-block">
                <h1>Create a new account</h1>
                <div className="inputs">
                    <InputField 
                        type="text" 
                        name="name" 
                        placeholder="Full name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                    <InputField 
                        type="email" 
                        name="email" 
                        placeholder="E-mail" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                    <div className="pass">
                        <InputField 
                            type={visible ? "text" : "password"} 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                        <span className="toggle-visibility material-symbols-outlined icon" onClick={() => setVisible(!visible)}>
                            {visible ? 'visibility' : 'visibility_off'}
                        </span>
                    </div>
                </div>
                <Checkbox label="I agree to the Terms and Conditions" />
                <button onClick={() => step(3)}>Continue</button>
                <div className="login-container">
                    <span>Do you have an account?</span>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ type, name, placeholder, value, onChange }) => (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
);

const Checkbox = ({ label }) => (
    <div className="checkbox">
        <input type="checkbox" />
        <label>{label}</label>
    </div>
);


const Institution_inform = ({step}) => {

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="Container">
            <div className="bloc_img">
                <img src="./login_back.png"></img>
            </div>
            <div className="bloc_inst">
                <h1>Tell me about your institutions</h1>
                <h3>Help me to Create a best user experience for you</h3>
                <div className="inputs">
                    <h2>Company name</h2>
                    <input type="text" className="name" placeholder="Institution name" required></input>
                    <h2>Phone number and Location</h2>
                    <div className="phone-input">
                      <select className="country-code">
                        <option value={+93}>+93 (Afghanistan)</option>
                        <option value={+355}>+355 (Albanie)</option>
                        <option value={+213}>+213 (Algérie)</option>
                        <option value={+1}>+1 (États-Unis)</option>
                        <option value={+376}>+376 (Andorre)</option>
                        <option value={+244}>+244 (Angola)</option>
                        <option value={+1}>+1 (Antigua-et-Barbuda)</option>
                        <option value={+54}>+54 (Argentine)</option>
                        <option value={+374}>+374 (Arménie)</option>
                        <option value={+61}>+61 (Australie)</option>
                        <option value={+43}>+43 (Autriche)</option>
                        <option value={+994}>+994 (Azerbaïdjan)</option>
                        <option value={+1}>+1 (Bahamas)</option>
                        <option value={+973}>+973 (Bahreïn)</option>
                        <option value={+880}>+880 (Bangladesh)</option>
                        <option value={+1}>+1 (Barbade)</option>
                        <option value={+375}>+375 (Biélorussie)</option>
                        <option value={+32}>+32 (Belgique)</option>
                        <option value={+501}>+501 (Belize)</option>
                        <option value={+229}>+229 (Bénin)</option>
                        <option value={+1}>+1 (Bermudes)</option>
                        <option value={+975}>+975 (Bhoutan)</option>
                        <option value={+591}>+591 (Bolivie)</option>
                        <option value={+387}>+387 (Bosnie-Herzégovine)</option>
                        <option value={+267}>+267 (Botswana)</option>
                        <option value={+55}>+55 (Brésil)</option>
                        <option value={+1}>+1 (Brunei)</option>
                        <option value={+359}>+359 (Bulgarie)</option>
                        <option value={+226}>+226 (Burkina Faso)</option>
                        <option value={+257}>+257 (Burundi)</option>
                        <option value={+855}>+855 (Cambodge)</option>
                        <option value={+237}>+237 (Cameroun)</option>
                        <option value={+1}>+1 (Canada)</option>
                        <option value={+238}>+238 (Cap-Vert)</option>
                        <option value={+1}>+1 (Caraïbes)</option>
                        <option value={+56}>+56 (Chili)</option>
                        <option value={+86}>+86 (Chine)</option>
                        <option value={+57}>+57 (Colombie)</option>
                        <option value={+269}>+269 (Comores)</option>
                        <option value={+242}>+242 (Congo)</option>
                        <option value={+243}>+243 (République démocratique du Congo)</option>
                        <option value={+682}>+682 (Cook Islands)</option>
                        <option value={+506}>+506 (Costa Rica)</option>
                        <option value={+225}>+225 (Côte d'Ivoire)</option>
                        <option value={+385}>+385 (Croatie)</option>
                        <option value={+53}>+53 (Cuba)</option>
                        <option value={+599}>+599 (Curaçao)</option>
                        <option value={+357}>+357 (Chypre)</option>
                        <option value={+420}>+420 (République tchèque)</option>
                        <option value={+45}>+45 (Danemark)</option>
                        <option value={+253}>+253 (Djibouti)</option>
                        <option value={+1}>+1 (Dominique)</option>
                        <option value={+1}>+1 (République dominicaine)</option>
                        <option value={+593}>+593 (Équateur)</option>
                        <option value={+20}>+20 (Égypte)</option>
                        <option value={+503}>+503 (El Salvador)</option>
                        <option value={+240}>+240 (Guinée équatoriale)</option>
                        <option value={+291}>+291 (Érythrée)</option>
                        <option value={+372}>+372 (Estonie)</option>
                        <option value={+251}>+251 (Éthiopie)</option>
                        <option value={+500}>+500 (Falkland Islands)</option>
                        <option value={+298}>+298 (Îles Féroé)</option>
                        <option value={+679}>+679 (Fidji)</option>
                        <option value={+358}>+358 (Finlande)</option>
                        <option value={+33}>+33 (France)</option>
                        <option value={+594}>+594 (Guyane française)</option>
                        <option value={+241}>+241 (Gabon)</option>
                        <option value={+220}>+220 (Gambie)</option>
                        <option value={+995}>+995 (Géorgie)</option>
                        <option value={+49}>+49 (Allemagne)</option>
                        <option value={+233}>+233 (Ghana)</option>
                        <option value={+350}>+350 (Gibraltar)</option>
                        <option value={+30}>+30 (Grèce)</option>
                        <option value={+299}>+299 (Groenland)</option>
                        <option value={+1}>+1 (Grenade)</option>
                        <option value={+590}>+590 (Guadeloupe)</option>
                        <option value={+1}>+1 (Guam)</option>
                        <option value={+502}>+502 (Guatemala)</option>
                        <option value={+224}>+224 (Guinée)</option>
                        <option value={+245}>+245 (Guinée-Bissau)</option>
                        <option value={+595}>+595 (Paraguay)</option>
                        <option value={+509}>+509 (Haïti)</option>
                        <option value={+504}>+504 (Honduras)</option>
                        <option value={+36}>+36 (Hongrie)</option>
                        <option value={+354}>+354 (Islande)</option>
                        <option value={+91}>+91 (Inde)</option>
                        <option value={+62}>+62 (Indonésie)</option>
                        <option value={+964}>+964 (Irak)</option>
                        <option value={+353}>+353 (Irlande)</option>
                        <option value={+972}>+972 (Israël)</option>
                        <option value={+39}>+39 (Italie)</option>
                        <option value={+1}>+1 (Jamaïque)</option>
                        <option value={+81}>+81 (Japon)</option>
                        <option value={+962}>+962 (Jordanie)</option>
                        <option value={+7}>+7 (Kazakhstan)</option>
                        <option value={+254}>+254 (Kenya)</option>
                        <option value={+686}>+686 (Kiribati)</option>
                        <option value={+965}>+965 (Kuwait)</option>
                        <option value={+996}>+996 (Kirghizistan)</option>
                        <option value={+856}>+856 (Laos)</option>
                        <option value={+371}>+371 (Lettonie)</option>
                        <option value={+961}>+961 (Liban)</option>
                        <option value={+266}>+266 (Lesotho)</option>
                        <option value={+231}>+231 (Libéria)</option>
                        <option value={+218}>+218 (Libye)</option>
                        <option value={+423}>+423 (Liechtenstein)</option>
                        <option value={+370}>+370 (Lituanie)</option>
                        <option value={+352}>+352 (Luxembourg)</option>
                        <option value={+853}>+853 (Macao)</option>
                        <option value={+389}>+389 (Macédoine du Nord)</option>
                        <option value={+261}>+261 (Madagascar)</option>
                        <option value={+265}>+265 (Malawi)</option>
                        <option value={+60}>+60 (Malaisie)</option>
                        <option value={+960}>+960 (Maldives)</option>
                        <option value={+223}>+223 (Mali)</option>
                        <option value={+356}>+356 (Malte)</option>
                        <option value={+692}>+692 (Îles Marshall)</option>
                        <option value={+596}>+596 (Martinique)</option>
                        <option value={+222}>+222 (Mauritanie)</option>
                        <option value={+230}>+230 (Maurice)</option>
                        <option value={+262}>+262 (Mayotte)</option>
                        <option value={+52}>+52 (Mexique)</option>
                        <option value={+691}>+691 (Micronésie)</option>
                        <option value={+373}>+373 (Moldavie)</option>
                        <option value={+377}>+377 (Monaco)</option>
                        <option value={+976}>+976 (Mongolie)</option>
                        <option value={+382}>+382 (Monténégro)</option>
                        <option value={+1664}>+1664 (Montserrat)</option>
                        <option value={+212}>+212 (Maroc)</option>
                        <option value={+258}>+258 (Mozambique)</option>
                        <option value={+264}>+264 (Namibie)</option>
                        <option value={+674}>+674 (Nauru)</option>
                        <option value={+977}>+977 (Népal)</option>
                        <option value={+31}>+31 (Pays-Bas)</option>
                        <option value={+599}>+599 (Pays-Bas caribéens)</option>
                        <option value={+64}>+64 (Nouvelle-Zélande)</option>
                        <option value={+505}>+505 (Nicaragua)</option>
                        <option value={+227}>+227 (Niger)</option>
                        <option value={+234}>+234 (Nigeria)</option>
                        <option value={+683}>+683 (Niue)</option>
                        <option value={+850}>+850 (Corée du Nord)</option>
                        <option value={+47}>+47 (Norvège)</option>
                        <option value={+968}>+968 (Oman)</option>
                        <option value={+92}>+92 (Pakistan)</option>
                        <option value={+680}>+680 (Palaos)</option>
                        <option value={+507}>+507 (Panama)</option>
                        <option value={+675}>+675 (Papouasie-Nouvelle-Guinée)</option>
                        <option value={+595}>+595 (Paraguay)</option>
                        <option value={+51}>+51 (Pérou)</option>
                        <option value={+63}>+63 (Philippines)</option>
                        <option value={+48}>+48 (Pologne)</option>
                        <option value={+351}>+351 (Portugal)</option>
                        <option value={+1787}>+1787 (Porto Rico)</option>
                        <option value={+974}>+974 (Qatar)</option>
                        <option value={+262}>+262 (Réunion)</option>
                        <option value={+40}>+40 (Roumanie)</option>
                        <option value={+7}>+7 (Russie)</option>
                        <option value={+250}>+250 (Rwanda)</option>
                        <option value={+966}>+966 (Arabie Saoudite)</option>
                        <option value={+221}>+221 (Sénégal)</option>
                        <option value={+381}>+381 (Serbie)</option>
                        <option value={+248}>+248 (Seychelles)</option>
                        <option value={+232}>+232 (Sierra Leone)</option>
                        <option value={+65}>+65 (Singapour)</option>
                        <option value={+421}>+421 (Slovaquie)</option>
                        <option value={+386}>+386 (Slovénie)</option>
                        <option value={+677}>+677 (Salomon)</option>
                        <option value={+252}>+252 (Somalie)</option>
                        <option value={+27}>+27 (Afrique du Sud)</option>
                        <option value={+34}>+34 (Espagne)</option>
                        <option value={+94}>+94 (Sri Lanka)</option>
                        <option value={+249}>+249 (Soudan)</option>
                        <option value={+597}>+597 (Suriname)</option>
                        <option value={+268}>+268 (Eswatini)</option>
                        <option value={+46}>+46 (Suède)</option>
                        <option value={+41}>+41 (Suisse)</option>
                        <option value={+963}>+963 (Syrie)</option>
                        <option value={+886}>+886 (Taïwan)</option>
                        <option value={+992}>+992 (Tadjikistan)</option>
                        <option value={+255}>+255 (Tanzanie)</option>
                        <option value={+66}>+66 (Thaïlande)</option>
                        <option value={+670}>+670 (Timor oriental)</option>
                        <option value={+228}>+228 (Togo)</option>
                        <option value={+676}>+676 (Tonga)</option>
                        <option value={+1}>+1 (Trinité-et-Tobago)</option>
                        <option value={+216}>+216 (Tunisie)</option>
                        <option value={+90}>+90 (Turquie)</option>
                        <option value={+993}>+993 (Turkménistan)</option>
                        <option value={+1}>+1 (Îles Turques-et-Caïques)</option>
                        <option value={+688}>+688 (Tuvalu)</option>
                        <option value={+256}>+256 (Ouganda)</option>
                        <option value={+380}>+380 (Ukraine)</option>
                        <option value={+971}>+971 (Émirats Arabes Unis)</option>
                        <option value={+44}>+44 (Royaume-Uni)</option>
                        <option value={+1}>+1 (États-Unis)</option>
                        <option value={+598}>+598 (Uruguay)</option>
                        <option value={+998}>+998 (Ouzbékistan)</option>
                        <option value={+678}>+678 (Vanuatu)</option>
                        <option value={+379}>+379 (Vatican)</option>
                        <option value={+58}>+58 (Venezuela)</option>
                        <option value={+84}>+84 (Vietnam)</option>
                        <option value={+1}>+1 (Îles Vierges américaines)</option>
                        <option value={+1}>+1 (Îles Vierges britanniques)</option>
                        <option value={+681}>+681 (Wallis et Futuna)</option>
                        <option value={+967}>+967 (Yémen)</option>
                        <option value={+260}>+260 (Zambie)</option>
                        <option value={+263}>+263 (Zimbabwe)</option>
                      </select>
                      <input type="tel" className="phone-number" placeholder="Votre numéro"/>
                    </div>
                    <h2>More information about you</h2>
                    <textarea className="vitrine" placeholder="Put a Small description here"></textarea>
                    <ul className="Company size">
                        {['1-10', '11-20', '21-50', '51-100', '100+'].map((size) => (
                            <li
                                key={size}
                                onClick={() => handleSizeClick(size)}
                                className={selectedSize === size ? 'selected' : ''}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={() => step(4)}>Continue</button>
            </div>
        </div>
    )
}

const Welcome = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

    return (
        <div className="Container3" style={{ position: 'relative', overflow: 'hidden' }}>
            <Confetti width={width} height={height} />
            <animated.div style={props}>
                <img src="assets/success_registration.png" alt="Registration Success" />
                <div>You have been registered successfully!</div>
                <a href="/Home">Begin in your presence app</a>
            </animated.div>
        </div>
    );
};


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
        case 4:
            return <Welcome step = {setStep}/>
        default:
            return null;
    }
};

export default Register;
