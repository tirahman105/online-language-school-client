
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AdminManageClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleApprove = (item) => {
    console.log("approve");
    fetch(`http://localhost:5000/classes/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "approved" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is approved Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // const handleDeny = (event, item) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log("deny");

  //   fetch(`http://localhost:5000/classes/${item._id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ status: "denied" }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${item.name} is denied Now!`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };

  const handleDenyFeedback = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("deny");

    const formData = new FormData(event.target);
    const feedback = formData.get("feedback");

    fetch(`http://localhost:5000/classes/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "denied", feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is denied Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div>
      <h1 className="text-center">Total Classes: {classes.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id} className={selectedItemId === item._id ? "modal-open" : ""}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.email}</td>

                <td>
                  {item.status === "pending" ? (
                    <>
                      <button
                        onClick={() => handleApprove(item)}
                        className="btn btn-success text-white"
                      >
                        Approve
                      </button>
                      {/* <button
                        onClick={(event) => handleDeny(event, item)}
                        className="btn btn-ghost bg-orange-600 text-white"
                      >
                        Deny
                      </button> */}
                      <>
                      <button className="btn btn-error" onClick={() => setSelectedItemId(item._id)}>
                    Deny
                  </button>
                  {selectedItemId === item._id && (
                    <dialog id={item._id} className="modal modal-bottom sm:modal-middle" open>
                      <form
                        onSubmit={(event) => handleDenyFeedback(event, item)}
                        method="dialog"
                        className="modal-box"
                      >
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Course Details</span>
                          </label>
                          <textarea
                            {...register("feedback", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Write about your course"
                          ></textarea>
                        </div>
                        <div className="modal-action">
                          <button type="submit" className="btn">
                            Deny Message
                          </button>
                          <button type="button" className="btn btn-error" onClick={handleCloseModal}>
                            Close
                          </button>
                        </div>
                      </form>
                    </dialog>
                  )}
                      
                      </>
                    </>
                  ) : item.status === "approved" ? (
                    <button className="btn btn-success text-white">Approved</button>
                  ) : (
                    <button className="btn btn-warning text-white">Denied</button>
                  )}
                </td>

               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageClass;

