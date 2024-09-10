import { useQuery } from '@tanstack/react-query';
import { fetchUserPosts } from '../services/api';
import { Post } from '../types';

const useUserPosts = (userId: number) => {
  const { data: userPosts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['userPosts', userId],
    queryFn: () => fetchUserPosts(userId).then(res => res.data),
    enabled: userId > 0, 
  });

  return {
    userPosts,
    isLoading,
    error,
  };
};

export default useUserPosts;
