import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SingleClass from "../Shared/SingleClass/SingleClass";


const AllClasses = () => {
    const classes = useLoaderData();
    return (
        <section>
        <SectionTitle
          subHeading={"Discover Our Popular English Courses for Every Skill Level"}
          heading={"AllClasses"}
        ></SectionTitle>
         <div className="grid md:grid-cols-3 gap-4">
                  {
                      classes.map(singleClass=> <SingleClass
                      key={singleClass._id}
                      singleClass= {singleClass}>
                      </SingleClass>)
                  }
               </div>
      </section>
    );
};

export default AllClasses;