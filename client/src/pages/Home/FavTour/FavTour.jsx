import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useTours from "../../../hooks/useTours";
import TourItem from "../../Shared/TourItem/TourItem";

const FavTour = () => {

  const [tour] = useTours()
  const adventure = tour.filter(item => item.category === "Adventure")

  return (
    <section className="my-8">
      <SectionTitle
        heading="Tour Packages"
        subHeading="Find Your Favorite Tour"
        textColor= "slate"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 m-4 md:mx-0">
        {
        adventure.map((item) => (
          <TourItem key={item._id} item={item}></TourItem>
        ))
        }
      </div>
      <div className="flex justify-center">
        <button className="btn btn-neutral btn-outline">See More</button>
      </div>
    </section>
  );
};

export default FavTour;
