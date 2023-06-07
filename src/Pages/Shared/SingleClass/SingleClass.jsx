import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
const SingleClass = ({singleClass}) => {


    const {name, image, seats, instructor, price, details, category} = singleClass;
    return (
        // <div className="flex space-x-2">
        //     <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src="https://placehold.co/370x247" alt="" />
        //     <div>
        //         <h3 className="uppercase">{name}----------</h3>
        //         <h2 className="text-2xl font-bold"> {instructor} </h2>
        //         <p>{details}</p>
        //     </div>
        //     <p className="text-yellow-500">${price}</p>
        //     <p className="text-yellow-500">${seats}</p>
        // </div>

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
    <button className="btn bg-blue-900 text-white hover:bg-blue-500 ">Enroll now</button> 
  </div>
</div>
    );
};


export default SingleClass;


