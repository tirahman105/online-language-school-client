

const InstructorCard = ({instructor}) => {
    const {name, photo, email} = instructor;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default InstructorCard;