import { Helmet } from "react-helmet-async";
import useBookedClass from "../../hooks/useBookedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Payment/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const MyBookedClasses = () => {
  const [bookedClass, refetch] = useBookedClass();
  const [selectedItemId, setSelectedItemId] = useState(null);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-school-server-opal.vercel.app/booked/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Online Language School | Booked Classes</title>
      </Helmet>
      <h1>My booked classes: {bookedClass.length}</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.category}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  {/* <Link to='/dashboard/payment'><button className="btn btn-warning">Pay</button></Link>  */}
                  <button
                    className="btn btn-info"
                    onClick={() => setSelectedItemId(item._id)}
                  >
                    Pay
                  </button>
                </td>

               

                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                {selectedItemId === item._id && (
                  <dialog
                    id={item._id}
                    className="modal modal-bottom sm:modal-middle"
                    open
                  >
                    <div method="dialog" className="modal-box">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg">
                          Course name: {item.name}
                        </h3>
                        <p>Instructor: {item.instructor}</p>
                        <p>Category: {item.category}</p>
                        <p>Number of Module: {item.module}</p>
                        <p>Price: $ {item.price}</p>
                      </div>

                      <div className="border">
                      <Elements stripe={stripePromise}>
                        <CheckoutForm handleCloseModal={handleCloseModal}
                             item={item}></CheckoutForm>
                      </Elements>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookedClasses;
