import BookingCard from "../../../components/BookingCard/BookingCard";

const BookingsTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
      {items.map((item) => (
        <BookingCard key={item._id} item={item}></BookingCard>
      ))}
    </div>
  );
};

export default BookingsTab;
