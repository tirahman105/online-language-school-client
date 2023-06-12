import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  console.log(user);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    if (user) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const { name,  instructor ,email,status, price, module,seats, category, details } = data;
            const newItem = {
              name,
              instructor,
           
               email,
              status,
              price: parseFloat(price),
              module: parseFloat(module),
              seats: parseFloat(seats),
              category,
              details,
              image: imgURL,
            };
            console.log(newItem);
            axiosSecure.post("/classes/pending", newItem).then((data) => {
              console.log("after posting new class ", data.data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Class added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }
        });
    }
  };
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"Fill up all information properly"}
        heading={"Add New Class"}
      ></SectionTitle>
      <div className="p-10  bg-slate-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Course Name*</span>
            </label>
            <input
              type="text"
              placeholder="Course Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("instructor", { required: true })}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
        
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email*</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="form-control w-full mb-4 hidden ">
            <label className="label">
              <span className="label-text font-semibold">Status*</span>
            </label>
            <input
              type="text"
              defaultValue="pending"
              {...register("status", { required: true })}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Language Category*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Pick One</option>
                <option>English</option>
                <option>French</option>
                <option>Japanese</option>
                <option>Arabic</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>German</option>
                <option>Chinese </option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Course Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Number of Module*
                </span>
              </label>
              <input
                type="number"
                {...register("module", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Available seats*
                </span>
              </label>
              <input
                type="number"
                {...register("seats", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Details</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Write about your course"
            ></textarea>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Course Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input  file-input-bordered w-full "
            />
          </div>
          <div className="flex justify-end">
            {" "}
            <input
              className="btn mt-4  bg-blue-900 text-white hover:bg-blue-500"
              type="submit"
              value="Add Course"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
