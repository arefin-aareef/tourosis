
const TourItem = ({ item }) => {
  const { image, price, tour_name, tour_details } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full my-4">
      <figure>
        <div>
        <img
          src={image}
        />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tour_name}</h2>
        <p>{tour_details}</p>
        <p>$ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
