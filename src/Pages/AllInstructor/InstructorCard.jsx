const InstructorCard = ({ instructor }) => {
  const { name, photo, email } = instructor;
  return (
    <div>
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl border border-white">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
        </div>
      </div> */}
        <div className="card card-compact w-96 bg-base-100 my-6 shadow-xl border border-white">
        <figure className="hover:scale-110 transition-transform">
          <img className="h-48 object-cover" src={photo} alt="Instructor" />
        </figure>
        <div className="card-body p-8 bg-slate-200 mt-5">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Email: {email}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
