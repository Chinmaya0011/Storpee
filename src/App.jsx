// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css';
import Home from './Home/Home';
import { MyContext, MyProvider } from './Context/MyContext';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const { isLogin, isSignup } = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Routes> {/* Use Routes component to define your routes */}
          <Route path="/signup" element={<Signup />} /> {/* Use element prop to specify the component */}
          <Route path="/login" element={<Login />} /> {/* Use element prop to specify the component */}
          <Route path="/home" element={<Home />} /> {/* Use element prop to specify the component */}
          <Route path="/" element={<Signup />} /> {/* Specify default route */}
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
