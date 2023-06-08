import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBookedClass = () => {


const { user, loading } = useAuth();
    //   const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure();
      const { refetch, data: bookedClasses = [] } = useQuery({
        queryKey: ['bookedClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/booked?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [bookedClasses, refetch]
}

export default useBookedClass;