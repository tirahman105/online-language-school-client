import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm();
 

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  
  const password = watch("password"); 
  const onSubmit = (data) => {
    if (data.password !== data.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log(data);
    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
              fetch('https://summer-camp-school-server-opal.vercel.app/users', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.insertedId) {
                          reset();
                          Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'User created successfully.',
                              showConfirmButton: false,
                              timer: 1500
                          });
                          navigate('/');
                      }
                  })
          })
          .catch((err) => {
            setError(err.message);
            if (err.code === 'auth/user-not-found') {
              Swal.fire('Error!', 'User does not exist.', 'error');
            } else if (err.code === 'auth/wrong-password') {
              Swal.fire('Error!', 'Invalid password.', 'error');
            }
            else if(err.code === 'auth/email-already-in-use') {
              Swal.fire('Error!', 'User Already registered. Try to login!.', 'error');
              
              navigate('/login');
            }
            else {
              Swal.fire('Error!', 'Sign up failed.', 'error');
            }
           
          });
        })
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
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
              {...register("confirm", { required: true })}
              name="confirm"
              placeholder="Confirm password"
              className="input input-bordered"
            />
            {errors.confirm && (
              <span className="text-red-600">Confirm your password</span>
            )}
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
              {...register("photoURL", { required: true })}
              name="photoURL"
              placeholder="Photo url"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo is required</span>
            )}
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
            <select
              className="input input-bordered py-2"
              {...register("gender")}
            >
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
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default SignUp;
