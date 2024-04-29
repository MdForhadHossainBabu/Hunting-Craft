import { useEffect, useState } from "react";

const CraftItemDetailsUpdate = () => {
 const [cart, setMyCart] = useState([])
 console.log(cart);
 const {category, craftName, description, photo, price, rating, stockStatus, userName, } = cart
 useEffect(() => {
   fetch('http://localhost:5000/craftItem')
     .then(res => res.json())
     .then(data => {
       // console.log(data);
       setMyCart(data);
     });
 }, []);
 return (
   <div className="card w-96 bg-base-100 shadow-xl">
     <figure>
       <img
         src="ph"
         alt=""
       />
     </figure>
     <div className="card-body">
       <h2 className="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary">Buy Now</button>
       </div>
     </div>
   </div>
 );
};

export default CraftItemDetailsUpdate;