import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SingleClass = ({singleClass}) => {

// TODO: Image change from DB
    const {_id, name, image, seats, instructor, price, details, category} = singleClass;
        const {user} = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();

    const handleBookClass = singleClass => {
      console.log(singleClass) 
      if(user && user.email){
          const bookedClass = {bookedClassId: _id, name, image,instructor,category, price, email: user.email}
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
       

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src="https://placehold.co/370x247" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p className="font-semibold">{instructor}</p>
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
    <button onClick={() => handleBookClass(singleClass)}className="btn bg-blue-900 text-white hover:bg-blue-500 ">Enroll now</button> 
  </div>
</div>
    );
};


export default SingleClass;


