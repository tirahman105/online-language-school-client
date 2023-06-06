import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center text-center mt-4">
        <div>
        <h1 className="text-3xl">Oops! Something went wrong.</h1>

<Link to="/">
  <button className="btn bg-blue-900 text-white hover:text-black mt-4">Back to Home</button>
</Link>
        </div>
      </div>
      <div>
        <img
          className="mx-auto object-cover w-full "
          src="https://media.tenor.com/5JunKCV2DEIAAAAC/error404-404.gif"
          alt=""
        />
      </div>

      
    </div>
  );
};

export default ErrorPage;
