import { Helmet } from "react-helmet-async";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useInstructorBookedClass from "../../../hooks/useInstructorBookedClass";


const ManageBooking = () => {

    const [instructorBookedClass, refetch] = useInstructorBookedClass()

    
   
    return (
        <div className="w-full">
             <Helmet>
                <title>Online Language School | Booked Classes</title>
            </Helmet>
            <h1>My booked classes: {instructorBookedClass.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Student Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorBookedClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.user_name}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-end">${item.price}</td>
                               
                                <td>
                                    <button className="btn btn-ghost bg-red-600  text-white">Due</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooking;