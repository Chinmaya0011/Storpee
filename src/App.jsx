import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import './App.css';
import Home from './Home/Home';
import { MyContext } from './Context/MyContext';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function App() {
  const { isLogin, isSignup } = useContext(MyContext);

  return (
    <Router>
      <Routes> {/* Wrap your Route components with Routes */}
        <Route path='/login' element={<Login/>}/> {/* Use element prop instead of component */}
        <Route path='/signup' element={<Signup/>}/> {/* Use element prop instead of component */}

        {/* Conditional rendering moved outside of Routes */}
        {isLogin || isSignup ? <Route path='/*' element={<Home />} /> : <Route path='/*' element={<Signup />} />} 
      </Routes> {/* Close Routes */}
    </Router>
  );
}

export default App;

