import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <>
      <Helmet>
        <title>Online Language School | Sign Up</title>
      </Helmet>

     <div className="w-full px-4 md:w-3/4 mx-auto border my-8 bg-slate-200">
      <h1 className="text-3xl text-center my-4">Sign Up now!</h1>
     <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 ">
      <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

                <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="mt-4">
                  <input type="checkbox" onChange={toggleShowPassword} />
                  <span className="label-text ml-2">Show password</span>
                </label>
                </div>
                

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirm")}
                  name="confirm"
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <label className="mt-4">
                  <input type="checkbox" onChange={toggleShowConfirmPassword} />
                  <span className="label-text ml-2">Show password</span>
                </label>
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="url"
                  {...register("photo")}
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile No.</span>
                </label>
                <input
                  type="tel"
                  {...register("mobile")}
                  name="mobile"
                  placeholder="Mobile"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label> 
                <select className="input input-bordered py-2" {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div className="form-control mt-8 mx-auto col-span-2">
                <input
                  disabled={false}
                  className="btn  bg-blue-900 text-white hover:bg-blue-500"
                  type="submit"
                  value="Sign Up"
                />
              </div>
      </form>
      <div className="text-center my-4 ">
      <p>
                Already a member?{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>{" "}
              </p>
      </div>
     </div>
    
      
    </>
  );
};

export default SignUp;
