import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import UpdateClass from "./UpdateClass";

const ManageClasses = () => {
  const [classes, refetch] = useInstructorClasses()
  const [selectedItemId, setSelectedItemId] = useState(null);

  // const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/classes/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div className="w-full">
      <SectionTitle subHeading="Fill up all information properly" heading="Add New Class" />
      <div className="overflow-x-auto w-full bg-slate-200">
        <table className="table w-full">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Module</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td className="text-right">${item.price}</td>
                <td className="text-right">{item.module}</td>
                <td className="text-right">{item.seats}</td>
                
                <td>
                  
                  <button className="btn btn-ghost btn-xs">{item.status}</button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">{item.feedback}</button>
                </td>
                <td>
                  <button onClick={() => setSelectedItemId(item._id)} className="btn btn-ghost btn-xs">Update</button>
                  {selectedItemId === item._id && (
                  <dialog
                    id={item._id}
                    className="modal modal-bottom sm:modal-middle"
                    open
                  >
                    
                    <div method="dialog" className="modal-box">
                      
                        <h3 className="font-bold text-lg">
                          Update: {item.name}
                        </h3>
                       

                      <div className="border">
                      
                        <UpdateClass handleCloseModal={handleCloseModal}
                             item={item}></UpdateClass>
                     
                      </div>
                      <div className="modal-action">
                        
                        {/* <button
                          type="button"
                          className="btn btn-error"
                          onClick={handleCloseModal}
                        >
                          Close
                        </button> */}
                      </div>
                    </div>
                  </dialog>
                )}
                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
                    <FaTrashAlt />
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

export default ManageClasses;
