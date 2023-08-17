import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import FavTour from "../FavTour/FavTour";
import Testimonials from "../Testimonials/Testimonials";
import TodaysPick from "../TodaysPick/TodaysPick";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <FavTour></FavTour>
            <TodaysPick></TodaysPick>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;