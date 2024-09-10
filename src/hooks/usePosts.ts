import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/api';
import { Post } from '../types';

const usePosts = () => {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts().then(res => res.data),
  });

  return {
    posts,
    isLoading,
    error,
  };
};

export default usePosts;
