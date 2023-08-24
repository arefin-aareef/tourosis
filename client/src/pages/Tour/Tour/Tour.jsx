import { Helmet } from "react-helmet-async";
import useTours from "../../../hooks/useTours";
import TourCategory from "../TourCategory/TourCategory";
import tourCover1 from "../../../assets/cover/cover1.jpg";
import tourCover2 from "../../../assets/cover/cover2.jpg";
import tourCover3 from "../../../assets/cover/cover3.jpg";
import tourCover4 from "../../../assets/cover/cover4.jpg";
import tourCover5 from "../../../assets/cover/cover5.jpg";

const Tour = () => {
  const [tour] = useTours()
  const adventure = tour.filter(item => item.category === "Adventure")
  const beach = tour.filter(item => item.category === "Beach")
  const nature = tour.filter(item => item.category === "Nature")
  const culture = tour.filter(item => item.category === "Culture")
  const history = tour.filter(item => item.category === "History")
  return (
    <div>
      <Helmet>
        <title>Tourosis | Tour</title>
      </Helmet>
      <TourCategory items={adventure} title="Adventure" coverImg={tourCover1}></TourCategory>
      <TourCategory items={nature} title="Nature" coverImg={tourCover2}></TourCategory>
      <TourCategory items={beach} title="Beach" coverImg={tourCover3}></TourCategory>
      <TourCategory items={culture} title="Culture" coverImg={tourCover4}></TourCategory>
      <TourCategory items={history} title="History" coverImg={tourCover5}></TourCategory>


    </div>
  );
};

export default Tour;
