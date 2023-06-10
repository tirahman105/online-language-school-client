import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBookedClass from "../../../hooks/useBookedClass";
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
const SingleClass = ({singleClass}) => {

  

// TODO: Image change from DB
    const {_id, name, image, seats, instructor,email, price, details, category} = singleClass;
        const {user} = useContext(AuthContext);
const [isInstructor] = useInstructor();
const [isAdmin] = useAdmin()
        const [, refetch] = useBookedClass();


    const navigate = useNavigate();
    const location = useLocation();

    const handleBookClass = singleClass => {
      console.log(singleClass) 
      if(user && user.email){
          const bookedClass = {bookedClassId: _id, name, user_name: user.displayName, image,instructor,category, price, email, user_email: user.email}
          fetch('http://localhost:5000/booked', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(bookedClass)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                refetch();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Class booked',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
      else{
          Swal.fire({
              title: 'Please login to book class.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
              }
            })
      }
  }

    return (
       

        <div className="card w-96 bg-base-100 shadow-xl mx-auto border border-white">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p className="font-semibold">{instructor}</p>
    <p className="font-semibold hidden">{email}</p>
    <p>{details}</p>

    <div className="divider"></div>
    <div className="card-actions justify-between">
        
        <div className="flex">
        <AiFillDollarCircle className="text-2xl"></AiFillDollarCircle>
      <div className="badge badge-outline ms-4">${price}</div>
        </div>
      
      <div className="flex">
      <BsFillPersonLinesFill className="text-2xl"></BsFillPersonLinesFill> 
      <div className="badge badge-outline ms-4">  {seats}</div>
      </div>
    </div>
    <div className="divider"></div>
    <button
  disabled={isInstructor || isAdmin}
  onClick={() => handleBookClass(singleClass)}
  className="btn dark:bg-slate-100 dark:text-slate-900 bg-blue-900 text-white hover:bg-blue-500"
>
  Enroll now
</button>
  </div>
</div>
    );
};


export default SingleClass;

