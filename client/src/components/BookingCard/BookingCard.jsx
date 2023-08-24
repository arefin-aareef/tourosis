const BookingCard = ({ item }) => {
  const { image, price, tour_name, tour_details, tour_duration } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
          <p className="bg-slate-900 text-white absolute top-0 right-0 mr-4 mt-4 p-2 rounded-md">${price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tour_name}</h2>
          <p>{tour_details}</p>
          <p>{tour_duration}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral btn-outline">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
