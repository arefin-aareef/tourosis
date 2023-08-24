import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import TourItem from "../../Shared/TourItem/TourItem";

const TourCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && (
        <Cover
          img={coverImg}
          title={`Best ${title} Tour Packages`}
          description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 m-4 md:mx-0">
        {items.map((item) => (
          <TourItem key={item._id} item={item}></TourItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/bookings/${title}`}>
          <button className="btn btn-outline mb-4">
            See All Available Tours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TourCategory;
