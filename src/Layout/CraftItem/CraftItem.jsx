import { useEffect, useState } from "react";
import CraftItemDetails from "./CraftItemDetails";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

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
    <div className="mt-12 space-y-4">
      <Fade direction="down" duration={300} delay={200}>
        <h2
          style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
          className="text-5xl font-bold font-display text-center"
        >
          Crafts
          <span className="text-rose-500" style={{ padding: '1rem' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Hunting', 'Cart']}
              loop={false}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={5}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </Fade>
      <Fade duration={300} delay={200} direction="up"> 
        <p className="text-xl font-display text-center lg:px-52">
          Art and craft provide a platform for the artists for expressing their
          ideas and talents. <br />{' '}
          <span className="text-rose-500">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                ' We generally write or speak to others if we want to   convey any message or talk about something.   ',
                'We generally write or speak to others if we want to convey any message or talk about something.',
              ]}
              loop={false}
              cursor
              cursorStyle="."
              typeSpeed={20}
              deleteSpeed={5}
              delaySpeed={1000}
            />
          </span>
        </p>
      </Fade>
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