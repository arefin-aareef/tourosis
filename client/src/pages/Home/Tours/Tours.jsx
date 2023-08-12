import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TourItem from "../../Shared/TourItem/TourItem";

const Tours = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("tours.json")
      .then((res) => res.json())
      .then((data) => {
        const adventureTours = data.slice(0, 6)
        setTour(adventureTours);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading="Tour Packages"
        subHeading="Find Your Favorite Tour"
      ></SectionTitle>
      <div className="grid grid-cols-3">
        {tour.map((item) => (
          <TourItem key={item._id} item={item}></TourItem>
        ))}
      </div>
      <button className="btn border-y-2">View All Tours</button>
    </section>
  );
};

export default Tours;
