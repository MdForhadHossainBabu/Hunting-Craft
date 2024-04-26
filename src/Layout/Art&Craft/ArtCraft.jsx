import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const ArtCraft = () => {
 const crafts = useLoaderData();
 console.log(crafts);
 return (
   <div>
     <Helmet>
       <title>Art & Craft || All Art & Craft </title>
     </Helmet>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-12 gap-6">
       {crafts.map(craft => (
         <CraftCard key={craft._id} craft={craft}></CraftCard>
       ))}
     </div>
   </div>
 );
};

export default ArtCraft;