import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useBookedClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: bookedClasses = [] } = useQuery({
        queryKey: ['bookedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booked?email=${user?.email}`)
            return res.json();
        },
    })


    return [bookedClasses, refetch]

};

export default useBookedClass;