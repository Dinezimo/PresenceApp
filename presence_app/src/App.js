import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Institutiondash from './components/institution/InstitutionDashboard';
import Groupedash from './components/group/GroupDashboard'
import Userdah from './components/user/UserDashboard'
import Login_page from './pages/LoginPage'
import Home_page from './pages/HomePage'
import secuered_route from './components/common/PrivateRoute';
import Contact from './pages/ContactPage'
import Dash1 from './components/Dashbord./Dash1.js';
import Register_form from './pages/RegisterComponents/Register_form.js';
import Loading_page from './components/common/loading_page.js';
import D1CardHandling from './components/Dashbord./D1Cardhandlr.js';
import UserProfile from './components/user/UserProfile.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/Login' element={<Login_page/>}/>
        <Route path='/Home' element={<Home_page/>}/>
        {<Route path='/Userdash' element={<Loading_page/>}/>}
        <Route path='/Register'element={<Register_form/>}/>
        <Route path='/dashboard' element={<D1CardHandling/>}/>
        <Route path='/Userprofile' element={<UserProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
