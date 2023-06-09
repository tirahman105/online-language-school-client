import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useInstructorClasses = () => {
    const {user}= useAuth();
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
            return res.json();
        }
    })

    return [classes, loading, refetch]
    
};

export default useInstructorClasses;