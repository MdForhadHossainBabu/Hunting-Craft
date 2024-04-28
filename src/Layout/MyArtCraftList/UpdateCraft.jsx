import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {

  const loader = useLoaderData();
  // console.log(loader);
  const { craftName,
    _id,
    quantity,
    rating,
    price,
    description,
    processingTime,
    stockStatus,
    userName,
    email,
     category,
    photo, } = loader;

   const handleUpdate = e => {
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
     const category = form.category.value;
     const rating = form.rating.value;

     const newCraft = {
       _id,
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
       category,
     };
    //  console.log(newCraft);
     // console.log(newCraft);

     // send backend
     fetch(`http://localhost:5000/craftItem/${_id}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(newCraft),
     })
       .then(res => res.json())
       .then(data => {
        //  console.log(data);
         if (data.modifiedCount > 0) {
           Swal.fire({
             title: 'success',
             text: 'Craft Updated Successfully',
             icon: 'success',
             confirmButtonText: 'Cool',
           });
         }
       });
   };
 return (
   <div className="my-12 mx-12 border-4 py-4 space-y-4 px-12">
     <form onSubmit={handleUpdate}>
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
               defaultValue={craftName}
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
               defaultValue={quantity}
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
               defaultValue={rating}
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
               defaultValue={price}
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
               defaultValue={category}
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
               defaultValue={description}
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
               defaultValue={processingTime}
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
               defaultValue={stockStatus}
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
               defaultValue={userName}
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
               defaultValue={email}
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
               defaultValue={photo}
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
           value="Update Craft"
           className="btn btn-block hover:bg-rose-500 hover:scale-105  outline-none duration-1000 bg-rose-500 text-xl font-display font-extrabold text-white"
         />
       </div>
     </form>
   </div>
 );
};

export default UpdateCraft;