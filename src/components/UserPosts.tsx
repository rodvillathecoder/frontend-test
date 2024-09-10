import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "../services/api";
import { CircularProgress, Typography } from "@mui/material";
import PostList from "../components/PostList";
import { Post } from "../types";

const UserPosts: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const userId = id ? Number(id) : -1;

  const {
    data: userPosts,
    isLoading,
    error,
  } = useQuery<Post[]>({
    queryKey: ["userPosts", userId],
    queryFn: () => fetchUserPosts(userId).then((res) => res.data),
    enabled: userId !== -1,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error loading user posts.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Posts {id}
      </Typography>
      {userPosts && <PostList posts={userPosts} />}{" "}
    </div>
  );
};

export default UserPosts;
