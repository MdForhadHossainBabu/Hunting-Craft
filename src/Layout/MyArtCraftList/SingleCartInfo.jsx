import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import Swal from "sweetalert2";


const SingleCartInfo = ({ cartInfo, setMyCart, myCart }) => {
  // console.log(cartInfo);
 
  const { _id, craftName, rating, photo } = cartInfo;

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log('data delete');
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              // make sure you delete and move to UI
              const remaining = myCart.filter(user => user._id !== id);
              setMyCart(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-gray-300 relative flex flex-col  h-96 w-full  px-7">
        <button
          onClick={() => handleDelete(_id)}
          className="absolute tooltip  -right-2 bg-white border-rose-700 -top-2 text-2xl text-rose-500 p-1 border-4 rounded-full"
          data-tip="Delete"
        >
          <MdDelete />
        </button>
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
        <div className="flex items-center justify-between px-6">
          <h2 className="border-4 px-4 text-white bg-green-500 font-display font-bold ">
            <Link to={`/updateCraft/${_id}`}>Update</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCartInfo;