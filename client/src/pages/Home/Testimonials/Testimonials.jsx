import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="p-4">
      <SectionTitle
        subHeading="What Our Client Says"
        heading="Testimonials"
        textColor="slate"
      ></SectionTitle>
      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ padding: 0, height: 200}}>
        {reviews.map((review) => 
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center md:pt-6 ">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-xl mx-10 text-center py-2">{review.details}</p>
              <p className="text-3xl font-semibold text-slate-500">{review.name}</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
