import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Institutiondash from './components/institution/InstitutionDashboard';
import Groupedash from './components/group/GroupDashboard'
import Userdah from './components/user/UserDashboard'
import Login_page from './pages/LoginPage'
import Home_page from './pages/HomePage'
import secuered_route from './components/common/PrivateRoute';
import Contact from './pages/ContactPage'
import Register from './pages/RegisterPage';
import Loading_page from './components/common/loading_page.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/Login' element={<Login_page/>}/>
        <Route path='/Home' element={<Home_page/>}/>
        {<Route path='/Userdash' element={<Loading_page/>}/>
        /*<Route path='/Contacts' element={<Contact/>}/>*/}
        <Route path='/Register'element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
