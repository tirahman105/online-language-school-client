import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";
import InstructorCard from "./InstructorCard";


const AllInstructor = () => {
    const [users] = useUsers();
  const instructors = users.filter(user => user.role === 'instructor')
    return (
        <section>
        <SectionTitle
          subHeading={"Discover Our Popular English Courses for Every Skill Level"}
          heading={"All instructor"}
        ></SectionTitle>
         <div className="grid md:grid-cols-3 gap-4">
                  {
                      instructors.map(instructor=> <InstructorCard
                      key={instructor._id}
                      instructor= {instructor}>
                      </InstructorCard>)
                  }
               </div>
      </section>
    );
};

export default AllInstructor;