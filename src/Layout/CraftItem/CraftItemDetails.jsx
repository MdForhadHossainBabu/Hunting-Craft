import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CraftItemDetails = ({ craftItemData }) => {
  console.log(craftItemData);
  const {
    _id,
    craftName,
    description,
    email,
    photo,
    price,
    processing_time,
    stockStatus,
    userName,
    rating,
  } = craftItemData;
  return (
    <div className="card bg-base-200">
      <figure>
        <div className="flex flex-col">
          <img
            className="w-[28rem]    h-[16rem] rounded-xl border-4 p-1 bg-green-500 mt-4"
            src={photo}
            alt="Shoes"
          />
          <p className="ml-4   text-center flex items-center gap-2"><IoIosStar /> {rating}
            <span className='ml-12 px-2 font-display font-thin text-md '>Painting</span></p>
        </div>
      </figure>
      <div className="card-body">
        <div className="grid grid-cols-4 gap-2">
          <h2 className="card-title col-span-3">{craftName.slice(0, 20)}</h2>
          <p className="font-display  mt-2 bg-green-400 font-extrabold text-white rounded-full text-center  p-2 border-4">
            {stockStatus}
          </p>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className='font-bold font-display opacity-80'>Price : ${price}</p>
        <div className="card-actions  flex items-center justify-center">
          <Link to={`/craft/${_id}`}  className='px-36 rounded-lg text-white bg-rose-500 py-2'> View Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
