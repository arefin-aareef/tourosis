import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const BookingCard = ({ item }) => {
  const { image, price, tour_name, tour_details, tour_duration } = item;
  const {user} =useContext(AuthContext)
  const navigate = useNavigate();

  const handleAddToCart = item => {
    console.log(item);
    if(user) {
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } else {
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }
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
            <button onClick={() => handleAddToCart(item)} className="btn btn-neutral btn-outline">Select Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
