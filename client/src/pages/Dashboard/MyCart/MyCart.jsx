import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'


const MyCart = () => {
  const [cart, refetch] = useCart()
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0)

  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        popup: 'custom-swal-popup' // Add a custom CSS class
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Tourosis | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
        <h3>Total Bookings: {cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Tour</th>
        <th>Details</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index) =>       <tr key={item._id}>
          <td>
            {index + 1}
          </td>
          <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
          </td>
          <td>
           {item.tour_name}
            <br/>
            <span className="badge badge-ghost badge-sm">{item.tour_details}</span>
          </td>
          <td className="text-end">${item.price}</td>
          <td>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /> </button>
          </td>
        </tr>)
      }

    </tbody>    
  </table>
</div>
    </div>
  );
};

export default MyCart;
