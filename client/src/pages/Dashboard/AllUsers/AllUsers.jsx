import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
  // const { data: users = [], refetch } = useQuery(["users"], async () => {
  //   const res = await fetch("http://localhost:5000/users");
  //   return res.json();
  // });
  // console.log('check user', users);

  const axiosSecure = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users');
    console.log('check user', res.data);
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleDelete = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch()
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
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
        <title>Tourosis | All Users</title>
      </Helmet>
      <h3 className="text-center font-semibold">Total User: {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? 'admin' : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost bg-orange-600 text-white"
                  >
                    <MdOutlineAdminPanelSettings />
                  </button>}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
