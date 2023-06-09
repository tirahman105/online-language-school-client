// import { FaTrashAlt } from "react-icons/fa";
// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// import Swal from "sweetalert2";
// import { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// // import useAuth from "../../../hooks/useAuth";

// const ManageClasses = () => {
//     const {user}= useAuth();
//     const [classes, setClasses] = useState([]);
//     const [axiosSecure] = useAxiosSecure();
// //     const url = `http://localhost:5000/classes?email=${user?.email}`;

// //   useEffect(() => {
// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((data) => setClasses(data));
// //   }, []);


// const getClasses = async email => {
//     const response = await fetch (`http://localhost:5000/classes?${email}`,)
//         const data = await response.json()
//         return data

//     }
// }

//     const handleDelete = item => {
//         // Swal.fire({
//         //     title: 'Are you sure?',
//         //     text: "You won't be able to revert this!",
//         //     icon: 'warning',
//         //     showCancelButton: true,
//         //     confirmButtonColor: '#3085d6',
//         //     cancelButtonColor: '#d33',
//         //     confirmButtonText: 'Yes, delete it!'
//         // }).then((result) => {
//         //     if (result.isConfirmed) {

//         //         axiosSecure.delete(`/classes/${item._id}`)
//         //             .then(res => {
//         //                 console.log('deleted res', res.data);
//         //                 if (res.data.deletedCount > 0) {
//         //                     // refetch();
//         //                     Swal.fire(
//         //                         'Deleted!',
//         //                         'Your file has been deleted.',
//         //                         'success'
//         //                     )
//         //                 }
//         //             })

//         //     }
//         // })
//     }
//   return (
//     <div className="w-full">
//       <SectionTitle
//         subHeading={"Fill up all information properly"}
//         heading={"Add New Class"}
//       ></SectionTitle>
//        <div className="overflow-x-auto w-full  bg-slate-200 ">
//             <table className="table w-full">
//                 {/* head */}
//                 <thead className="bg-blue-800 text-white">
//                     <tr>
//                         <th>#</th>
//                         <th>Item</th>
//                         <th>Category</th>
//                         <th>Price</th>
//                         <th>Module</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         classes.map((item, index) => <tr key={item._id}>
//                             <td>
//                                 {index + 1}
//                             </td>
//                             <td>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={item.image} alt="Avatar Tailwind CSS Component" />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="font-bold">{item.name}</div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td>
//                                 {item.category}
//                             </td>
//                             <td className="text-right">${item.price}</td>
//                             <td className="text-right">{item.module}</td>
//                             <td>
//                                 <button className="btn btn-ghost btn-xs">details</button>
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(item)}  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
//                             </td>
//                         </tr>)
//                     }

//                 </tbody>
//             </table>
//         </div>
//     </div>
//   );
// };

// export default ManageClasses;


// import { FaTrashAlt } from "react-icons/fa";
// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// import Swal from "sweetalert2";
// import { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";

// const ManageClasses = () => {
//   const { user } = useAuth();
//   const [classes, setClasses] = useState([]);
//   const [axiosSecure] = useAxiosSecure();

//   const getClasses = async (email) => {
//     const response = await fetch(`http://localhost:5000/classes?email=${email}`);
//     const data = await response.json();
//     return data;
//   };

//   const handleDelete = (item) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/classes/${item._id}`)
//           .then(res => {
//             console.log('deleted res', res.data);
//             if (res.data.deletedCount > 0) {
//               // refetch();
//               Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//               );
//             }
//           });
//       }
//     });
//   };

//   useEffect(() => {
//     if (user?.email) {
//       getClasses(user.email)
//         .then((data) => setClasses(data))
//         .catch((error) => console.log('Error:', error.message));
//     }
//   }, [user?.email]);

//   return (
//     <div className="w-full">
//       <SectionTitle
//         subHeading="Fill up all information properly"
//         heading="Add New Class"
//       ></SectionTitle>
//       <div className="overflow-x-auto w-full bg-slate-200">
//         <table className="table w-full">
//           <thead className="bg-blue-800 text-white">
//             <tr>
//               <th>#</th>
//               <th>Item</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Module</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <div className="flex items-center space-x-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle w-12 h-12">
//                         <img src={item.image} alt="Avatar Tailwind CSS Component" />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold">{item.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>{item.category}</td>
//                 <td className="text-right">${item.price}</td>
//                 <td className="text-right">{item.module}</td>
//                 <td>
//                   <button className="btn btn-ghost btn-xs">details</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageClasses;



import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useInstructorClasses from "../../../hooks/useInstructorClasses";

const ManageClasses = () => {
  const [classes, refetch] = useInstructorClasses()

  // const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  // const getClasses = async email => {
  //   try {
  //     if (user) {
  //       const response = await axiosSecure.get(`/classes?email=${email}`);
  //       return response.data;
  //     }
  //     return [];
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   getClasses()
  //     .then((data) => setClasses(data))
  //     .catch((error) => console.error(error));
  // }, [user]);

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
              <th>Update</th>
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
                  <button className="btn btn-ghost btn-xs">details</button>
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
