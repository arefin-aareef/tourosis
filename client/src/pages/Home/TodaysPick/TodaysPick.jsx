import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/featured/featured.jpg";
import './TodaysPick.css'

const TodaysPick = () => {
  return (
    <div className="featured-item bg-fixed  text-white">
      <div className="bg-slate-500 bg-opacity-60 pt-8">
      <SectionTitle
        subHeading="Hot Deal For You"
        heading="Featured Today"
        textColor="white"
      ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center pt-8 pb-16 px-16 bg-slate-500 bg-opacity-60">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="text-sm pt-2 md:pt-0">
            <span className="font-bold">
              {
                new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
              }
            </span>
          </p>
          <p className="text-3xl my-2 font-semibold">Explore A New Destination</p>
          <p className="mb-4">Embark on a journey of a lifetime with our Captivating Coastal Escape tour. Discover pristine beaches, indulge in local delicacies, and experience the rich coastal culture. Whether you are seeking adventure or relaxation, this tour promises an unforgettable escape.</p>
          <button className="btn btn-outline text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default TodaysPick;
