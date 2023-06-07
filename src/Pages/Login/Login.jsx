import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };


    const {signIn} = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = event  => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    console.log(email, password);
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error));
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
            <div className="divider"></div>
            <div className="text-center mb-4">
              {" "}
              <p>
                New Here?{" "}
                <Link to="/signup" className="font-bold">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
