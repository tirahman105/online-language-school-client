import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleClass from "../../Shared/SingleClass/SingleClass";
import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {

  const [classes] = useClasses();
  const popular = classes.filter(singleClass => singleClass.category === 'popular')
 
 

  return (
    <section className="my-8">
      <SectionTitle
        subHeading={"Discover Our Popular English Courses for Every Skill Level"}
        heading={"Popular Classes"}
      ></SectionTitle>
      {popular.length}
       <div className="grid md:grid-cols-3 gap-4">
                {
                    popular.map(singleClass=> <SingleClass
                    key={singleClass._id}
                    singleClass= {singleClass}>
                    </SingleClass>)
                }
             </div>
    </section>
  );
};

export default PopularClasses;





