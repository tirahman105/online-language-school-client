import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ClassList = () => {

    const [axiosSecure] = useAxiosSecure();
    const {data: classes = [], refetch} =useQuery(['classes'], async() => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
  return (
    <div>
      <h1>Approved Classes: {classes.length}</h1>
    
    </div>
  );
};

export default ClassList;
