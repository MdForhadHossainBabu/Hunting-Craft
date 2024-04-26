import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoutes = ({ children }) => {
 
 const location = useLocation();
 console.log(location);
 const { user, loading } = useContext(AuthContext)

 if (loading) {
  return <h2>Loading... </h2>
 }
 if (!user) {
  return <Navigate to="/" />
 }
 return (
  <div>
  {children}
  </div>
 );
};

export default ProtectedRoutes;