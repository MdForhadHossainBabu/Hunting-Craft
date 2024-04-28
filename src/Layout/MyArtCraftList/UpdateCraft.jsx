import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {

  const loader = useLoaderData();
  console.log(loader);

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
    console.log(newCraft);
  }
 return (
   <div>
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
       <div className="mt-6">
         <input
           type="submit"
           value="Update Craft"
           className="btn btn-block bg-black text-white"
         />
       </div>
     </form>
   </div>
 );
};

export default UpdateCraft;