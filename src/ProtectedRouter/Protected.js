import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {
  const isAuthenticated = localStorage.getItem('user');
  
  if (isAuthenticated) {
    return <Route {...props} element={children} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
