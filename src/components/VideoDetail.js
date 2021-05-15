import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  if (!video) return null;

  return (
    <Card>
      <CardContent>
        <CardMedia
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
          }}
        >
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </CardMedia>
        <Typography gutterBottom variant='h5' component='h2'>
          {video.snippet.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {video.snippet.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoDetail;
