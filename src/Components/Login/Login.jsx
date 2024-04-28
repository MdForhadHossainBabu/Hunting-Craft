import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";


const Login = () => {
  const { signInUser, googleLogin, githubLogin, setProfile, setProfileEmail } =
    useContext(AuthContext);
  
  const [showPassword, setShowPassword] = useState(false);

 const handleLogIn = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name, email, password);
  
  signInUser(email, password)
   .then(result => {
     setProfile(result.user)
     Swal.fire({
       title: 'success',
       text: 'You are currently login',
       icon: 'success',
       confirmButtonText: 'Cool',
     });
    //  toast.success(`${result.user.email} login successfully`)
     console.log(result.user);
     setProfileEmail(result.user)
   })
   .catch(error => {
    console.log(error);
  })

 }
 
 // google log in 
 const handleGoogleLogin = () => {
  googleLogin()
   .then(result => {
     setProfile(result.user)
     Swal.fire({
       title: 'success',
       text: 'You are currently login',
       icon: 'success',
       confirmButtonText: 'Cool',
     });
    //  toast.success(`${result.user.email} login successfully with Google`)
     console.log(result.user);
     setProfileEmail(result.user)
   })
   .catch(error => {
   console.log(error);
  })
 }
 // Git Hub Login 
 const handleGithubLogin = () => {
  githubLogin()
   .then(result => {
     setProfile(result.user);
     setProfileEmail(result.user)
     Swal.fire({
       title: 'success',
       text: 'You are currently login',
       icon: 'success',
       confirmButtonText: 'Cool',
     });
    //  toast.success(`${result.user.displayName} login successfully with GitHub`)
    console.log(result.user);
   })
   .catch(error => {
   console.log(error);
  })
 }

 return (
   <div>
     <Helmet>
       <title>Art & Craft || Login</title>
     </Helmet>
     <div className="f">
       <div className="flex flex-col items-center border-4 lg:mx-96 bg-gray-200">
         <h1 className="text-4xl font-bold font-display text-rose-500 mt-12">
           Login Now
         </h1>
         <form
           onSubmit={handleLogIn}
           className="flex flex-col gap-5 md:w-1/2 w-full lg:w-1/2 justify-center my-12 px-4 py-4 space-y-3"
         >
           <div className="space-y-2">
             <p>Email :</p>
             <input
               className="outline-none px-5 py-2 bg-white text-green-600 w-full rounded-md"
               type="email"
               name="email"
               placeholder="Email*"
               id=""
             />
           </div>

           <div className="space-y-2 relative">
             <p>Password</p>
             <input
               className="outline-none px-5 py-2 bg-white text-green-500 w-full rounded-md"
               type={showPassword? 'text' : "password"}
               name="password"
               placeholder="Password*"
               id=""
             />
             <span className="absolute top-1/2 right-4 text-lg" onClick={() => setShowPassword(!showPassword)}>{
             showPassword? <FaEyeSlash/>:<FaEye/>
             }</span>
           </div>

           <input
             className="border px-12 rounded-lg py-1 bg-rose-600 text-white hover:scale-105 duration-300 font-bold"
             type="submit"
             value="Login"
           />
         </form>
         <div className="divider font-display font-bold mx-8 text-blue-500">
           Continue with
         </div>
         <div className="flex gap-12">
           <button
             className="border p-2 rounded-full bg-blue-700 text-white hover:scale-105 shadow-2xl shadow-blue-500 drop-shadow-2xl"
             onClick={handleGoogleLogin}
           >
             <FaGoogle />
           </button>
           <button
             className="border p-2 rounded-full bg-blue-700 text-white hover:scale-105 shadow-2xl shadow-blue-500 drop-shadow-2xl"
             onClick={handleGithubLogin}
           >
             <FaGithub />
           </button>
         </div>
         <div className="font-display my-4">
           <h2>
             Dont have account ? <Link
               className="font-medium text-blue-500 font-display hover:underline hover:duration-300 hover:text-blue-600 hover:font-extrabold"
               to="/register"
             >
                Sign Up
             </Link>
           </h2>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Login;