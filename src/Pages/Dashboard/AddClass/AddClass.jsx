import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

    }
    return (
        <div className="w-full">
             <SectionTitle
        subHeading={"Fill up all information properly"}
        heading={"Add New Class"}
      ></SectionTitle>
            <div className="p-10  bg-slate-200">
            <form  onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name*</span>
                    </label>
                    <input type="text" placeholder="Course Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Language Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
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
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Number of Module*</span>
                        </label>
                        <input type="number" {...register("module", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Course Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input  file-input-bordered w-full " />
                </div>
               <div className="flex justify-end"> <input className="btn mt-4  bg-blue-900 text-white hover:bg-blue-500" type="submit" value="Add Course" /></div>
            </form>
            </div>
        </div>
    );
};

export default AddClass;