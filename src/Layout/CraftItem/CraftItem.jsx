import { useEffect, useState } from "react";
import CraftItemDetails from "./CraftItemDetails";

const CraftItem = () => {
  // const { email } = profile;
  
  const [craftData, setCraftData] = useState([]);
  const craftItemData = craftData.slice(0, 6);
  console.log(craftItemData);
  useEffect(() => {
    fetch(`http://localhost:5000/craft`)
      .then(res => res.json())
      .then(data => {
        console.log(data.slice(0, 6));
        setCraftData(data.slice(0, 6))
    })
},[])


  return (
    <div>
      <h2 className="text-5xl font-bold font-display text-center">Crafts </h2>
      <p className="text-xl font-display text-center lg:px-52">
        Art and craft provide a platform for the artists for expressing their
        ideas and talents. We generally write or speak to others if we want to
        convey any message or talk about something.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto px-12 gap-6">
        {craftData.map((craftItemData, indx) => (
          <CraftItemDetails
            key={indx}
            craftItemData={craftItemData}
          ></CraftItemDetails>
        ))}
      </div>
    </div>
  );
};

export default CraftItem;