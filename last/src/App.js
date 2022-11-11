import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Addroom from './components/Addroom';
import UserHome from './components/UserHome';
import Userprofile from './components/Userprofile';
import Roomdetails from './components/Roomdetails';
import Houseowner  from './components/Houseowner';
import Admin from './components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    // <Home />

    <Router>
    <Routes>
      <Route  path="/" element={<Home/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
    
      </Route>
      <Route path="/signup" element={<Signup/>}>
    
      </Route>
      <Route path="/userhome" element={<UserHome/>}>
    
      </Route>
      <Route path="/houseowner" element={<Houseowner/>}>
    
    </Route>

      <Route path="/admin" element={<Admin/>}>
    
    </Route>
      
      <Route path="/addroom" element={<Addroom/>}>
    
      </Route>
      <Route path="/userprofile" element={<Userprofile/>}>
    
      </Route>

      <Route path="/roomdetails" element={<Roomdetails/>}>
      </Route>
     

    </Routes>
    </Router>

   
  );
}

export default App;
