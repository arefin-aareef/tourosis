import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Destination.css'
import { EffectCoverflow, Pagination } from "swiper/modules";
import img1 from '../../../assets/destination/destination1.jpg'
import img2 from '../../../assets/destination/destination2.jpg'
import img3 from '../../../assets/destination/destination3.jpg'
import img4 from '../../../assets/destination/destination4.jpg'
import img5 from '../../../assets/destination/destination5.jpg'
import img6 from '../../../assets/destination/destination6.jpg'



const Destination = () => {
  return (
    <div>
        <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Destination;
