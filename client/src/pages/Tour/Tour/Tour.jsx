import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import FavTour from "../../Home/FavTour/FavTour";
import tourCover1 from "../../../assets/cover/cover1.jpg";
import tourCover2 from "../../../assets/cover/cover2.jpg";
import tourCover3 from "../../../assets/cover/cover3.jpg";
import tourCover4 from "../../../assets/cover/cover4.jpg";

const Tour = () => {
  const favTourValue = 3;
  const category1 = "Adventure";
  const category2 = "Culture";
  const category3 = "Nature";
  const category4 = "Beach";

  const secHeading1 = "Adventure Tour Packages";
  const secHeading2 = "Culture Tour Packages";
  const secHeading3 = "Nature Tour Packages";
  const secHeading4 = "Beach Tour Packages";
  
  const secSubHeading = "Find Your Favorite Tour";
  return (
    <div>
      <Helmet>
        <title>Tourosis | Tour</title>
      </Helmet>

      <Cover
        img={tourCover1}
        title="Best Adventure Tour Packages"
        description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour
        sliceValue={favTourValue}
        tourCategory={category1}
        titleHeading={secHeading1}
        titleSubHeading={secSubHeading}
      ></FavTour>

      <Cover
        img={tourCover2}
        title="Best Culture Tour Packages"
        description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour
        sliceValue={favTourValue}
        tourCategory={category2}
        titleHeading={secHeading2}
        titleSubHeading={secSubHeading}
      ></FavTour>

      <Cover
        img={tourCover3}
        title="Best Nature Tour Packages"
        description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour
        sliceValue={favTourValue}
        tourCategory={category3}
        titleHeading={secHeading3}
        titleSubHeading={secSubHeading}
      ></FavTour>
      
      <Cover
        img={tourCover4}
        title="Best Beach Tour Packages"
        description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour
        sliceValue={favTourValue}
        tourCategory={category4}
        titleHeading={secHeading4}
        titleSubHeading={secSubHeading}
      ></FavTour>
    </div>
  );
};

export default Tour;
