import { useQuery } from '@tanstack/react-query';
import { fetchPost, fetchComments } from '../services/api';
import { Post, Comment } from '../types'; 

const usePost = (postId: number) => {
  const { data: post, isLoading: postLoading, error: postError } = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId).then(res => res.data),
    enabled: postId !== -1,
  });

  const { data: comments, isLoading: commentsLoading, error: commentsError } = useQuery<Comment[]>({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId).then(res => res.data),
    enabled: postId !== -1, 
  });

  return {
    post,
    postLoading,
    postError,
    comments,
    commentsLoading,
    commentsError,
  };
};

export default usePost;
