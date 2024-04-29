import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CraftCard from './CraftCard';
import { useEffect, useState } from 'react';
import NewData from './NewData';
import { Typewriter } from 'react-simple-typewriter';
import { Bounce, Fade } from 'react-awesome-reveal';

const ArtCraft = () => {
  const crafts = useLoaderData();
  const [craftData, setCraftData] = useState([]);
  console.log(craftData);
  useEffect(() => {
    fetch('https://assignment-10-server-nine-omega.vercel.app/craftItem')
      .then(res => res.json())
      .then(data => {
        setCraftData(data);
      });
  }, []);
  //  console.log(crafts);
  return (
    <div className="font-display">
      <Helmet>
        <title>Art & Craft || All Art & Craft </title>
      </Helmet>
      <div className="my-8">
        <Bounce>
          <h2 className="text-4xl text-center font-bold font-display">
            All Craft Item
          </h2>
        </Bounce>
        <Fade direction="up" duration={300} delay={300}>
          <p className="text-center py-1">
            Could you please specify which craft items you're interested in?{' '}
            <br />
            <span className="text-blue-500">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  ' There is a wide range of crafts and each could have countless different items associated with it.',
                  'Its exquisite craftsmanship and exquisite materials make it a coveted piece for connoisseurs and collectors alike',
                ]}
                loop={false}
                cursor
                cursorStyle="."
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span>
          </p>
        </Fade>
      </div>

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
