import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Root = () => {
 return (
   <div>
     {/* Navbar */}
     <div className="h-[4.5rem]">
       <Navbar />
     </div>

     {/* This is Outlet */}
     <Outlet />


   </div>
 );
};

export default Root;