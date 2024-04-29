import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';
// import AtomicSpinner from 'atomic-spinner';



const ProtectedRoutes = ({ children }) => {
 
 const location = useLocation();
 console.log(location);
 const { user, loading } = useContext(AuthContext)

 if (loading) {
  return (
    <div className="flex items-center justify-center my-24">
      <ClipLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
    {/* <AtomicSpinner/> */}
    </div>
  );
 }
 if (!user) {
  return <Navigate to="/login"  state={location?.pathname || '/'}/>
 }
 return (
  <div>
  {children}
  </div>
 );
};

export default ProtectedRoutes;