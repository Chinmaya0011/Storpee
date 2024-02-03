import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { Route } from 'react-router'
function LoginSignup() {
  return (
    <div>
       <Route path="/login" element={<>
         <Login/>
        </>} />
        <Route path="/signup" element={<>
         <Signup/>
        </>} />
    </div>
  )
}

export default LoginSignup