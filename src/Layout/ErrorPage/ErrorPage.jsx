import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
   <div className="flex flex-col items-center my-[28vh]  py-12 space-y-4">
     <h1 className="text-9xl font-bold text-red-500 ">404/</h1>
     <h1 className="text-2xl ml-48">Pages Not Found</h1>

     <Link to="/">
       <button className="border-2 px-12 py-2 border-green-500 text-lg font-medium rounded-xl">Back To Home</button>
     </Link>
   </div>
 );
};

export default ErrorPage;