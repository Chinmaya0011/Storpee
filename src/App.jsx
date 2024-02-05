import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import { MyContext, MyProvider } from './Context/MyContext';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function App() {
  const { isLogin, isSignup } = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Home/>
      </Router>
    </MyProvider>
  );
}

export default App;
