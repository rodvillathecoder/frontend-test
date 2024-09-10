import React from "react";
import usePost from "../hooks/usePost";
import {
  CircularProgress,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = id ? Number(id) : -1;

  const {
    post,
    postLoading,
    postError,
    comments,
    commentsLoading,
    commentsError,
  } = usePost(postId);

  if (postLoading || commentsLoading) {
    return <CircularProgress />;
  }

  if (postError || commentsError) {
    return <Typography color="error">Error loading data.</Typography>;
  }

  return (
    <div>
      {post && (
        <Card style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1">{post.body}</Typography>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate(`/user/${post.userId}/posts`)}
              style={{ marginTop: "10px" }}
            >
              See more posts from user
            </Button>
          </CardContent>
        </Card>
      )}

      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>

      {comments && comments.length > 0 ? (
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText
                primary={comment.name}
                secondary={
                  <>
                    <Typography variant="body2" color="textPrimary">
                      {comment.email}
                    </Typography>
                    <Typography variant="body2">{comment.body}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No comments available.</Typography>
      )}
    </div>
  );
};

export default PostDetail;
