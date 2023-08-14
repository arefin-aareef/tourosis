import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

  return (
    <section>
      <SectionTitle
        subHeading="What Our Client Says"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="m-24">
                    <p>{review.details}</p>
                    <p>{review.name}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
