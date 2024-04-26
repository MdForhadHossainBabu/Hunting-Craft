import { useLoaderData } from "react-router-dom";

const Details = () => {
 const craft = useLoaderData();
 console.log(craft);
 const {
   craftName,
   quantity,
   rating,
   price,
   description,
   processingTime,
   stockStatus,
   userName,
   email,
   photo,
 } = craft;



 return (
   <div className="bg-gray-400 max-w-8xl lg:mx-52 pb-24 pt-6">
     <div>
       <h2 className="text-4xl text-center font-extrabold font-display my-5 text-rose-500">
         Current Page Details
       </h2>
     </div>
     <div className="flex items-center justify-center">
       <div className="lg:w-[52rem] lg:h-[32rem]  items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-4  justify-around ">
         <div>
           <img
             className="w-[22rem] h-full rounded-lg hover:scale-105 duration-500"
             src={photo}
             alt=""
           />
         </div>
         <div>
           <div className="flex items-center font-display font-bold">
             <div>
               <h1>Craft Name </h1>
               <h1>Quantity </h1>
               <h1>Price </h1>
               <h1>Processing Time</h1>
               <h1>Stock Status </h1>
               <h1>User Name </h1>
               <h1>Email </h1>
               <h1>Rating </h1>
             </div>
             <div>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
               <h1 className="pl-3">:</h1>
             </div>
             <div>
               <h1 className="pl-4"> {craftName}</h1>
               <h1 className="pl-4"> {quantity}</h1>
               <h1 className="pl-4"> {price} BDT</h1>
               <h1 className="pl-4"> {processingTime} min</h1>
               <h1 className="pl-4"> {stockStatus}</h1>
               <h1 className="pl-4"> {userName}</h1>
               <h1 className="pl-4"> {email}</h1>
               <h1 className="pl-4"> {rating}</h1>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="lg:mx-32 mx-5 ">
       <h1 className="">
         {' '}
         <span className="font-display font-bold hover:underline ">Description :</span> {description}
       </h1>
     </div>
   </div>
 );
};

export default Details;