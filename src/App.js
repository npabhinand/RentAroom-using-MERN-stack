
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
   Routes,
  Route

} from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/signin';
import Reg from './components/reg';
import Ownerpage from './components/Ownerpage';
import User from './components/User';



function App() {
  
 return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}>
          </Route>
          <Route path="/login" element={<SignIn/>}>
        
          </Route>
          <Route path="/registration" element={<Reg/>}>
        
          </Route>
          <Route path="/Owner" element={<Ownerpage/>}>

          </Route>
          <Route path="/User" element={<User/>}>

          </Route>
        </Routes>
        </Router>
   
 )
}

export default App;
