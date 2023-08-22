import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import FavTour from "../FavTour/FavTour";
import Testimonials from "../Testimonials/Testimonials";
import TodaysPick from "../TodaysPick/TodaysPick";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const favTourValue = 3;
  const category = "Adventure";
  const secHeading = "Tour Packages"
  const secSubHeading = "Find Your Favorite Tour"
  const secColor = "slate"
  return (
    <div>
      <Helmet>
        <title>Tourosis | Home</title>
      </Helmet>
      <Banner></Banner>
      <Destination></Destination>
      <FavTour 
      sliceValue={favTourValue} 
      tourCategory={category}
      titleHeading={secHeading}
      titleSubHeading={secSubHeading}
      titleColor={secColor}
      ></FavTour>
      <TodaysPick></TodaysPick>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
