import React from 'react';
import { Card, CardContent,  Typography } from '@material-ui/core/';

/**
 * Post is a container for a single post
 * @returns post element
 */
const Post = () => {
  return (
    <Card>
      <Typography  gutterBottom variant="h5" component="h2">Author</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Post content</Typography>
      </CardContent>
    </Card>
  );
};


export default Post;

