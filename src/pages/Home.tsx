import React from "react";
import usePosts from "../hooks/usePosts";
import { CircularProgress, Typography } from "@mui/material";
import PostList from "../components/PostList";

const Home: React.FC = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error loading posts.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      {posts && <PostList posts={posts} />}{" "}
    </div>
  );
};

export default Home;
