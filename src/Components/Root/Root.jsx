import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
const Root = () => {
 return (
   <div>
     {/* Navbar */}
     <div className="h-[4.5rem]">
       <Navbar />
     </div>

     {/* This is Outlet */}
     <Outlet />
<Footer/>

   </div>
 );
};

export default Root;