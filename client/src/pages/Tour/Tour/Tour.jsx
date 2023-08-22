import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import tourCover1 from "../../../assets/cover/cover1.jpg";
const Tour = () => {

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
    </div>
  );
};

export default Tour;
