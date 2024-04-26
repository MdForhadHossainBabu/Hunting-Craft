import { useContext, useEffect, useState } from "react";
// import { FaSun,FaMoon } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from 'react-icons/io';
import { HiXMark } from 'react-icons/hi2';
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";



const Navbar = () => {

  const { profile, logOut, user } = useContext(AuthContext);
  console.log(user);
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
  document.querySelector('html').setAttribute('data-theme', localTheme)
 },[theme])

// handleToggle onChange button
 const handleToggle = e => {
  if (e.target.checked) {
  setTheme('dark')
  } else {
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
           <div>
             <label className="cursor-pointer grid place-items-center">
               <input
                 onChange={handleToggle}
                 type="checkbox"
                 className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
               />
               <svg
                 className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                 xmlns="http://www.w3.org/2000/svg"
                 width="14"
                 height="15"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <circle cx="12" cy="12" r="5" />
                 <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
               </svg>
               <svg
                 className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                 xmlns="http://www.w3.org/2000/svg"
                 width="14"
                 height="14"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
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