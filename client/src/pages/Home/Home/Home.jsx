import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import FavTour from "../FavTour/FavTour";
import Testimonials from "../Testimonials/Testimonials";
import TodaysPick from "../TodaysPick/TodaysPick";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const favTourValue = 3;
  const category = "Adventure";
  return (
    <div>
      <Helmet>
        <title>Tourosis | Home</title>
      </Helmet>
      <Banner></Banner>
      <Destination></Destination>
      <FavTour sliceValue={favTourValue} tourCategory={category}></FavTour>
      <TodaysPick></TodaysPick>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
