import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddCraft = () => {
 const handleAddCraft = e => {
  e.preventDefault();
  const form = e.target;
  const craftName = form.name.value;
  const quantity = form.quantity.value;
  const price = form.price.value;
  const description = form.description.value;
  const processingTime = form.processing_time.value;
  const stockStatus = form.stock_status.value;
  const userName = form.userName.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const rating = form.rating.value;
  
  const newCraft = {
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
  };
  // console.log(newCraft);
  console.log(newCraft);

  // send backend 
  fetch('http://localhost:5000/craft', {
   method: 'POST', 
   headers: {
    'content-type': 'application/json'
   },
   body:JSON.stringify(newCraft)
  })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if (data.insertedId) {
     Swal.fire({
       title: 'success',
       text: 'Craft Added Successfully',
       icon: 'success',
       confirmButtonText: 'Cool',
     });
    }
  })
 
 }
 return (
   <div className="my-12 mx-12 border-4 py-4 space-y-4 px-12">
     <Helmet>
       <title>Art Craft || Add Craft Item</title>
     </Helmet>
     <form onSubmit={handleAddCraft}>
       {/* form row */}
       <div className="flex gap-12">
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Craft Name</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="name"
               placeholder="Craft Name"
               className="input input-bordered w-full"
             />
           </label>
         </div>
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Available Quantity</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="quantity"
               placeholder="Available Quantity"
               className="input input-bordered md:w-full"
             />
           </label>
         </div>
       </div>
       {/* form row */}
       <div className="flex gap-12">
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Rating</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="rating"
               placeholder="Rating"
               className="input input-bordered w-full"
             />
           </label>
         </div>
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Price :</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="price"
               placeholder="Price"
               className="input input-bordered md:w-full"
             />
           </label>
         </div>
       </div>
       {/* form category & details row */}
       <div className="flex gap-12">
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Subcategory_Name :</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="category"
               placeholder="Subcategory_name"
               className="input input-bordered w-full"
             />
           </label>
         </div>
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Description : </span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="description"
               placeholder="Description"
               className="input input-bordered md:w-full"
             />
           </label>
         </div>
       </div>
       {/* form category & details row */}
       <div className="flex gap-12">
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Processing time :</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="processing_time"
               placeholder="Processing_time"
               className="input input-bordered w-full"
             />
           </label>
         </div>
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Stock Status : </span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="stock_status"
               placeholder="Stock_Status"
               className="input input-bordered md:w-full"
             />
           </label>
         </div>
       </div>
       {/* form category & details row */}
       <div className="flex gap-12">
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Name :</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="userName"
               placeholder="Username"
               className="input input-bordered w-full"
             />
           </label>
         </div>
         <div className="from-control md:w-1/2">
           <label className="label">
             <span className="label-text">Email  : </span>
           </label>
           <label className="input-group">
             <input
               type="email"
               name="email"
               placeholder="Email"
               className="input input-bordered md:w-full"
             />
           </label>
         </div>
       </div>

       {/* form category & details row */}
       <div>
         <div className="from-control md:w-3/4 lg:w-full">
           <label className="label">
             <span className="label-text">Photo URL</span>
           </label>
           <label className="input-group">
             <input
               type="text"
               name="photo"
               placeholder="Photo URL"
               className="input input-bordered w-full"
             />
           </label>
         </div>
       </div>
       <div className="mt-6">
         <input
           type="submit"
           value="Add Craft"
           className="btn btn-block bg-black text-white"
         />
       </div>
     </form>
   </div>
 );
};

export default AddCraft;