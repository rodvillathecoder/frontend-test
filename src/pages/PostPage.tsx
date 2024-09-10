import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, CircularProgress, Button } from "@mui/material";
import PostDetail from "../components/PostDetail";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <Typography color="error">ID post not valid.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post Details
      </Typography>

      <React.Suspense fallback={<CircularProgress />}>
        <PostDetail />{" "}
      </React.Suspense>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "10px" }}
      >
        Back to Home Page{" "}
      </Button>
    </div>
  );
};

export default PostPage;
