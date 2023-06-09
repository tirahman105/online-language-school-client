import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TiTick, TiTimes } from 'react-icons/ti';

const AdminManageClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const {data: classes = [], refetch} =useQuery(['classes'], async() => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApprove = item =>{
        fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.name} is approved Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
  return (
    <div>
      <h1>Approved Classes: {classes.length}</h1>
      <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
        {/* head */}
        <thead>
            <tr>
                <th>#</th>
                <th>Class</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Approve</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                classes.map((item, index) => <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.instructor}</td>
                    <td>{item.email}</td>
                    <td>{ item.status === 'pending' ? <button onClick={() => handleApprove(item)} className="btn btn-ghost bg-orange-600  text-white">Approve</button>  :<button  className="btn btn-success  text-white">Approved</button>

                        }</td>

                </tr>)
            }

        </tbody>
    </table>
</div>

    </div>
  );
};

export default AdminManageClass;

{
  /* <td>{ item.status === 'pending' ? <button onClick={() => handleApprove(item)} className="btn btn-ghost bg-orange-600  text-white">Approve</button>  :<button  className="btn btn-success  text-white">Approved</button> 
                        
                    }</td> */
}



