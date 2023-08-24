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
  const adventure = tour.filter(item => item.category === "adventure").slice(0, 3)
  const beach = tour.filter(item => item.category === "beach").slice(0, 3)
  const nature = tour.filter(item => item.category === "nature").slice(0, 3)
  const culture = tour.filter(item => item.category === "culture").slice(0, 3)
  const history = tour.filter(item => item.category === "history").slice(0, 3)
  return (
    <div>
      <Helmet>
        <title>Tourosis | Tour</title>
      </Helmet>
      <TourCategory items={adventure} title="adventure" coverImg={tourCover1}></TourCategory>
      <TourCategory items={nature} title="nature" coverImg={tourCover2}></TourCategory>
      <TourCategory items={beach} title="beach" coverImg={tourCover3}></TourCategory>
      <TourCategory items={culture} title="culture" coverImg={tourCover4}></TourCategory>
      <TourCategory items={history} title="history" coverImg={tourCover5}></TourCategory>


    </div>
  );
};

export default Tour;
