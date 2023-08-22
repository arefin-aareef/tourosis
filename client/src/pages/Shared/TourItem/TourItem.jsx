
const TourItem = ({ item }) => {
  const { image, price, tour_name, tour_details, tour_duration } = item;
  return (
    <div className=" card w-full shadow-xl image-full">
      <figure style={{ overflow: 'hidden', margin: 0 }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img
            src={image}
            alt={tour_name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{tour_name}</h2>
        <p className="text-sm font-thin	">{tour_details}</p>
        <p>Duration: <span className="font-bold">{tour_duration}</span></p>
        <p>Price: <span className="font-bold"> ${price}</span></p>
        <div className="card-actions justify-center lg:justify-end">
          <button className="btn btn-outline text-white">View Details</button>
          <button className="btn btn-outline text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
