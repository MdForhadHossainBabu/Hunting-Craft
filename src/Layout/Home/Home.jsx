import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
 return (
  <div>
   <Helmet>
    <title>Art & Craft </title>
   </Helmet>
   <Banner/>
  </div>
 );
};

export default Home;