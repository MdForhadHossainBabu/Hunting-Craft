import { useContext, useEffect, useState } from "react";
// import { FaSun,FaMoon } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from 'react-icons/io';
import { HiXMark } from 'react-icons/hi2';
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const Navbar = () => {

  const { profile, logOut, user,  } = useContext(AuthContext);
  // console.log('this is ', user);
  // console.log(profile);


 const navLinks = (
   <div className="flex items-center gap-4">
     <NavLink
       to="/"
       className={({ isActive }) =>
         isActive ? 'border-b-4 border-rose-400  lg:px-5 text-rose-500 font-bold py-1 rounded-sm' : ' rounded-md py-1 border-green-600 lg:px-5 '
       }
     >
       Home
     </NavLink>
     <NavLink
       to="/art&craft"
       className={({ isActive }) =>
         isActive ? 'border-b-4 border-rose-400  lg:px-5 text-rose-500 font-bold py-1 rounded-sm' : ' rounded-md py-1 border-green-600 lg:px-5 '
       }
     >
       All Art & craft
     </NavLink>
     <NavLink
       to="/addCraft"
       className={({ isActive }) =>
         isActive ? 'border-b-4 border-rose-400  lg:px-5 text-rose-500 font-bold py-1 rounded-sm' : ' rounded-md py-1 border-green-600 lg:px-5 '
       }
     >
       Add Craft Item
     </NavLink>
     <NavLink
       to="/myCraftList"
       className={({ isActive }) =>
         isActive ? 'border-b-4 border-rose-400  lg:px-5 text-rose-500 font-bold py-1 rounded-sm' : ' rounded-md py-1 border-green-600 lg:px-5 '
       }
     >
       My Art & Craft List
     </NavLink>
   </div>
 );

 // this is state is theme setup 
 const [theme, setTheme] = useState('light');

 //This state is dropdown menu
 const [open, setOpen] = useState(false)



 // handleToggle button useEffect 
 useEffect(() => {
  localStorage.setItem('theme', theme);
   const localTheme = localStorage.getItem('theme');
  //  console.log(localTheme);
  document.querySelector('html').setAttribute('data-theme', localTheme)
 },[theme])

// handleToggle onChange button
 const handleToggle = e => {
  if (e.target.checked) {
  setTheme('dark')
  }  else {
   setTheme('light')
 }
 }
  // console.log(theme);
  
  // logOutButton
  const handleLogOut = () => {
    logOut()
      .then(result => {
      console.log(result);
      })
      .catch(error => {
      console.log(error);
    })
  }

 return (
   <div className="lg:max-w-8xl  mx-auto lg:px-12 px-4 py-2 lg:py-3 shadow-xl fixed w-full z-20">
     <div className="flex items-center justify-between">
       {/* Navbar Name & logo of heading */}
       <div className="font-displayRoboto ">
         <h2 className="text-3xl font-extrabold text-rose-400">
           Art <span className="text-blue-600">&</span>
           <span className="text-green-500"> Craft</span>
         </h2>
       </div>
       {/* Navbar items & menu */}
       <div className="hidden lg:flex font-display font-medium">{navLinks}</div>

       {/* Navbar login & register */}
       <div>
         {/* <div  className="text-xl" onClick={() => setTheme(!theme)}>
      {
       theme === true ? <FaSun /> : <FaMoon />
       
      }
     </div> */}

         <div className="flex items-center gap-3 font-display font-medium">
           {user ? (
             <h2>
               <button onClick={handleLogOut}>Log Out</button>
             </h2>
           ) : (
             <h2>
               <Link to="/login">login</Link>
             </h2>
           )}
           <div></div>

           {/* onchange function & handleToggle button */}
           <div className="flex items-center justify-center">
             <label className="swap swap-rotate">
               {/* this hidden checkbox controls the state */}
               <input
               onChange={handleToggle}  type="checkbox" />

               {/* sun icon */}
               <svg
                 className="swap-on fill-current w-8 h-8"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
               >
                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
               </svg>

               {/* moon icon */}
               <svg
                 className="swap-off fill-current w-8 h-8"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
               >
                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
               </svg>
             </label>
           </div>
           {/* conditionally profile update to this way */}
           <div>
             {profile && (
               <img
                 className="w-12 rounded-full h-12"
                 src={user?.photoURL}
                 alt=""
               />
             )}
           </div>

           <div
             onClick={() => setOpen(!open)}
             className="text-3xl flex md:hidden lg:hidden relative border-4 bg-rose-600 text-white"
           >
             {open ? <HiXMark /> : <IoIosMenu />}
             {/* <IoIosMenu /> */}

             <ul
               className={`absolute duration-1000
             ${open ? 'top-16' : '!-top-96'}
             right-[2rem] top-10`}
             >
               <div className="flex flex-col gap-6 bg-blue-300 px-4 py-4">
                 <NavLink
                   to="/"
                   className={({ isActive }) =>
                     isActive
                       ? 'border-2 border-green-600 text-blue-600  font-medium lg:px-5 px-24  text-sm'
                       : 'border-2 border-green-600 px-24  text-sm'
                   }
                 >
                   Home
                 </NavLink>
                 <NavLink
                   to="/art&craft"
                   className={({ isActive }) =>
                     isActive
                       ? 'border-2 border-green-600 text-blue-600  font-medium lg:px-5 px-24  text-sm'
                       : 'border-2 border-green-600 px-24  text-sm'
                   }
                 >
                   All Art & craft
                 </NavLink>
                 <NavLink
                   to="/addCraft"
                   className={({ isActive }) =>
                     isActive
                       ? 'border-2 border-green-600 text-blue-600  font-medium lg:px-5 px-24  text-sm'
                       : 'border-2 border-green-600 px-24  text-sm'
                   }
                 >
                   Add Craft
                 </NavLink>
                 <NavLink
                   to="/myCraftList"
                   className={({ isActive }) =>
                     isActive
                       ? 'border-2 border-green-600 text-blue-600  font-medium lg:px-5 px-24  text-sm'
                       : 'border-2 border-green-600 px-24  text-sm'
                   }
                 >
                   My Art&Craft List
                 </NavLink>
               </div>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Navbar;