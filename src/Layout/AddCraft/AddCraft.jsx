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
   const stockIn = form.instock.value;
   const stockOut = form.outstock.value;
  const userName = form.userName.value;
  const email = form.email.value;
   const photo = form.photo.value;
   const category = form.category.value;
  const rating = form.rating.value;
  
  const newCraft = {
    craftName,
    quantity,
    rating,
    price,
    description,
    processingTime,
    stockIn,stockOut,
    userName,
    email,
    photo,
    category,
  };
  // console.log(newCraft);
  // console.log(newCraft);

  // send backend 
  fetch('http://localhost:5000/craftItem', {
   method: 'POST', 
   headers: {
    'content-type': 'application/json'
   },
   body:JSON.stringify(newCraft)
  })
   .then(res => res.json())
   .then(data => {
    // console.log(data);
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
   <div className="my-12 mx-12 border-4 py-4 space-y-4 px-12 font-display font-medium">
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
           <div className="flex flex-col border-2 mt-3 rounded-lg">
             <p className="font-display font-bold mx-3">Stock Status</p>
             <span className="flex items-center gap-2 mx-4 font-display font-medium">
               <input type="radio" name="instock" id="" />
               <p>In Stock </p>
             </span>
             <span className="flex items-center gap-2 mx-4 font-medium font-display">
               <input type="radio" name="outstock" id="" />
               <p>Stock Out</p>
             </span>
           </div>
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
             <span className="label-text">Email : </span>
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
       <div className="border-2 py-3 my-4 px-4 rounded-lg">
         <h1 className="tex-2xl font-display font-extrabold text- xl my-1">Customization</h1>
         <div className="flex items-center gap-2 font-display">
           <input type="radio" name="Yes" id=" " />
           Yes
         </div>
         <div className="flex items-center gap-2 font-display">
           <input type="radio" name="Yes" id=" " />
           No
         </div>
       </div>
       <div className="mt-6">
         <input
           type="submit"
           value="Add Craft"
           className="btn btn-block bg-rose-500 font-extrabold text-xl  hover:bg-rose-500 hover:text-white text-white"
         />
       </div>
     </form>
   </div>
 );
};

export default AddCraft;