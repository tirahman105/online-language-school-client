

import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const { data: users = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await fetch('https://summer-camp-school-server-opal.vercel.app/users');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return [users, loading, refetch];
};

export default useUsers;