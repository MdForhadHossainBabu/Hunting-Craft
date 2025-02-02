import { Fade } from "react-awesome-reveal";
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewData = ({ craftData }) => {

 const { _id, craftName, rating, photo } = craftData;
 return (
   <Fade>
     <div className="bg-gray-300 flex flex-col  h-96 w-full  px-7">
       <div className="flex items-center justify-center">
         <img className="w-[78rem] h-52 rounded-lg mt-5" src={photo} alt="" />
       </div>
       <div>
         {/* details */}
         {/* rating */}
         <div className="flex items-center gap-4">
           <h1>
             <small className="flex gap-2 items-center mt-3">
               <IoStarHalfOutline /> {rating}
             </small>
           </h1>

           <h1 className="mt-2">{craftName}</h1>
         </div>
       </div>
       <div className="flex items-center justify-center my-6">
         <Link
           to={`/craft/${_id}`}
           className=" rounded-md hover:scale-105 duration-500 px-28 py-1 font-extrabold font-display bg-rose-500 text-white"
         >
           Details
         </Link>
       </div>
     </div>
   </Fade>
 );
};

export default NewData;