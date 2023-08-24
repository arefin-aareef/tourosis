const BookingCard = ({ item }) => {
  const { image, price, tour_name, tour_details, tour_duration } = item;
  return (
    <div className="flex flex-col items-center p-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="w-full h-60 object-cover" />
          <p className="bg-slate-900 text-white absolute top-0 right-0 mr-4 mt-4 p-2 rounded-md">${price}</p>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{tour_name}</h2>
          <p>{tour_details}</p>
          <p>Duration: <span className="font-semibold">{tour_duration}</span></p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral btn-outline">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
