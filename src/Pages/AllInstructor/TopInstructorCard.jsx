

const TopInstructorCard = ({ instructor }) => {
  const { email, totalPayments, image } = instructor;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl border border-white">
        <figure>
          <img src={image} alt="Instructor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Email: {email}</h2>
          <p>Total Payments: {totalPayments}</p>
        </div>
      </div>
    </div>
  );
};

export default TopInstructorCard;
