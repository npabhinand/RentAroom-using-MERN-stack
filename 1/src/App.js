
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
   Routes,
  Route

} from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/signin';
import Signup from './components/Signup';
import Ownerpage from './components/Ownerpage';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
 return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}>
          </Route>
          <Route path="/login" element={<SignIn/>}>
        
          </Route>
          <Route path="/signup" element={<Signup/>}>
        
          </Route>
          <Route path="/Owner" element={<Ownerpage/>}>

          </Route>
          <Route path="/User" element={<User/>}>
            </Route>
          <Route path="/User" element={<User/>}>
          </Route>
        </Routes>
        </Router>
   
 )
}

export default App;
