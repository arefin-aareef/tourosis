import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import Testimonials from "../Testimonials/Testimonials";
import TodaysPick from "../TodaysPick/TodaysPick";
import Tours from "../Tours/Tours";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <Tours></Tours>
            <TodaysPick></TodaysPick>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;