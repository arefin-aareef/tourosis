import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import TodaysPick from "../TodaysPick/TodaysPick";
import Tours from "../Tours/Tours";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <Tours></Tours>
            <TodaysPick></TodaysPick>
        </div>
    );
};

export default Home;