import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUserPosts from "../hooks/useUserPosts";
import { Button, CircularProgress, Typography } from "@mui/material";
import PostList from "../components/PostList";

const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const userId = Number(id);
  const { userPosts, isLoading, error } = useUserPosts(userId);

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "10px" }}
      >
        Back to Home Page
      </Button>
    </div>
  );
};

export default UserPostsPage;
