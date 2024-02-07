import { Link } from "react-router-dom";

export 
const ProtectedRouteForAdmin = ({ element }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin && admin.user.email === 'imchinu17@gmail.com') {
    return element;
  } else {
   console.log('error')
  }
}