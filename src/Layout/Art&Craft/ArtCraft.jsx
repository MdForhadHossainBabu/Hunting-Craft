import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useEffect, useState } from "react";
import NewData from "./NewData";

const ArtCraft = () => {
  const crafts = useLoaderData();
  const [craftData, setCraftData] = useState([])
  console.log(craftData);
  useEffect(() => {
    fetch('http://localhost:5000/craftItem')
      .then(res => res.json())
      .then(data => {
    
          setCraftData(data)
    })
  },[])
//  console.log(crafts);
 return (
   <div>
     <Helmet>
       <title>Art & Craft || All Art & Craft </title>
     </Helmet>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-12 gap-6">
       {crafts.map(craft => (
         <CraftCard key={craft._id} craft={craft}></CraftCard>
       ))}
     </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-12 gap-6 my-8">
         {craftData.map(craftData => (
           <NewData key={craftData._id} craftData={craftData} />
         ))}
       </div>
   </div>
 );
};

export default ArtCraft;