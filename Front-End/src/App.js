import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login_page from './pages/LoginPage'
import Register_form from './pages/RegisterComponents/Register_form.js';
import Loading_page from './components/common/loading_page.js';
import D1CardHandling from './components/Dashbord./D1Cardhandlr.js';
import './App.css';
import RepportDashboard from './components/repport/Repport.js';
import LaunchPresence from './components/Attendance/Launch_Attendance.js';
import SessionPlanning from './components/repport/Session_Plannig.js';
import AdhesionOptionshower from './components/Adhesion_Request/OptionsShowers.js';
import SettingsPage from './components/Settings/Setting.js';
import ComingSoonPage from './pages/ComingSoonPage.js';
import Notification from './components/Notification/Notification.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/Login' element={<Login_page/>}/>
        {<Route path='/Userdash' element={<Loading_page/>}/>}
        <Route path='/Register'element={<Register_form/>}/>
        <Route path='/dashboard' element={<D1CardHandling/>}/>
        <Route path='/UserReport' element={<RepportDashboard/>}/>
        <Route path='/LaunchPresence' element={<LaunchPresence/>}></Route>
        <Route path='/PlanSession' element={<SessionPlanning/>}/>
        <Route path='/AdhesionRequest' element={<AdhesionOptionshower/>}/>
        <Route path='/Settings' element={<SettingsPage/>}/>
        <Route path='/ComingSoon' element={<ComingSoonPage/>}/>
        <Route path='/Norif' element={<Notification/>}/>
      </Routes>
    </Router>
  );
}

export default App;
