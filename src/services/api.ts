import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => api.get('/posts');
export const fetchPost = (id: number) => api.get(`/posts/${id}`);
export const fetchUserPosts = (userId: number) => api.get(`/users/${userId}/posts`);
export const fetchComments = (postId: number) => api.get(`/posts/${postId}/comments`);
