import { Helmet } from "react-helmet-async";
import useBookedClass from "../../hooks/useBookedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyBookedClasses = () => {
    const [bookedClass, refetch] = useBookedClass()

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
                fetch(`http://localhost:5000/booked/${item._id}`, {
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
    }

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
                        {
                            bookedClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td> <button className="btn btn-warning">Pay</button> </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookedClasses;