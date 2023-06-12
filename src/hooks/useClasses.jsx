import { useQuery } from "@tanstack/react-query";



const useClasses = () => {
    
    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://summer-camp-school-server-opal.vercel.app/classes')
    //     .then(res => res.json())
    //     .then(data => {
    //         setClasses(data);
    //           setLoading(false);
    //     });
    // },[])
    // return[classes, loading]

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-opal.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]

};

export default useClasses;