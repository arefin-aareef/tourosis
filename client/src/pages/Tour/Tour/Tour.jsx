import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import tourCover from '../../../assets/cover/cover1.jpg';
import FavTour from "../../Home/FavTour/FavTour";

const Tour = () => {
  const favTourValue = 3;
  const category1 = "Adventure";
  const category2 = "Culture";
  const category3 = "Nature";
  return (
    <div>
      <Helmet>
        <title>Tourosis | Tour</title>
      </Helmet>

      <Cover 
      img={tourCover} 
      title="Best Tour Packages"
      description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour sliceValue={favTourValue} tourCategory={category1}></FavTour>

      <Cover 
      img={tourCover} 
      title="Best Tour Packages"
      description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour sliceValue={favTourValue} tourCategory={category2}></FavTour>

      <Cover 
      img={tourCover} 
      title="Best Tour Packages"
      description="Experience the world's wonders hassle-free with our handpicked collection of Best Tour Packages. From captivating destinations to seamless planning, your dream vacation starts here."
      ></Cover>
      <FavTour sliceValue={favTourValue} tourCategory={category3}></FavTour>

    </div>
  );
};

export default Tour;
