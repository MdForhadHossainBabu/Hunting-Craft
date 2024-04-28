import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleCartInfo from "./SingleCartInfo";

const MyArtCraftList = () => {
 const [myCart, setMyCart] = useState([]);
 // console.log(myCart);

 useEffect(() => {
  fetch('http://localhost:5000/craftItem')
    .then(res => res.json())
    .then(data => {
     // console.log(data);
     setMyCart(data)
    });
},[])

 return (
   <div>
     <Helmet>
       <title>Art & Craft || My Art & Craft List</title>
     </Helmet>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto p-12 gap-12">
       {myCart.map((cartInfo) => (
         <SingleCartInfo key={cartInfo._id} cartInfo={cartInfo} />
       ))}
     </div>
   </div>
 );
};

export default MyArtCraftList;