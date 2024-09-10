import React from "react";
import { Post } from "../types";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexWrap="wrap" gap={5} justifyContent="center">
      {posts &&
        posts.map((post) => (
          <Box key={post.id} width={300} m={1}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.body.substring(0, 100)}...
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate(`/posts/${post.id}`)}
                  style={{ marginTop: "10px" }}
                >
                  Read more...
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
    </Box>
  );
};

export default PostList;
