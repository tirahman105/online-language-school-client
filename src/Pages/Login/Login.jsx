import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";



  const onSubmit = (data) => {
    const { email, password } = data;
  
    console.log(data);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };


    

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Helmet>
        <title>Online Language School | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-3xl font-bold">
              Journey into Language: <br /> Explore, Learn, and Connect Online!
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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

              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn  bg-blue-900 text-white hover:bg-blue-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
           
            
            <SocialLogin></SocialLogin>
            <p className='px-6 text-sm text-center text-gray-400 mb-4'>
          Don't have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-blue-600'
          >
            Sign up
          </Link>
          .
        </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
