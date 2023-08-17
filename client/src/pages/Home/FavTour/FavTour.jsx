import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TourItem from "../../Shared/TourItem/TourItem";

const FavTour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("tours.json")
      .then((res) => res.json())
      .then((data) => {
        const adventureTours = data.slice(0, 6);
        setTour(adventureTours);
      });
  }, []);
  return (
    <section className="my-8">
      <SectionTitle
        heading="Tour Packages"
        subHeading="Find Your Favorite Tour"
        textColor="slate"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 m-6">
        {tour.map((item) => (
          <TourItem key={item._id} item={item}></TourItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-neutral btn-outline">View All Tours</button>
      </div>
    </section>
  );
};

export default FavTour;
