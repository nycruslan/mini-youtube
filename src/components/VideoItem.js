import React from 'react';
import {
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <ListItem
      button
      alignItems='flex-start'
      onClick={() => onVideoSelect(video)}
      divider
    >
      <div>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          style={{
            maxWidth: `${matches ? '7rem' : '12rem'}`,
            marginRight: '0.5rem',
          }}
        />
      </div>
      <ListItemText>
        <Typography variant={matches ? 'body2' : 'subtitle1'}>
          {video.snippet.title}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default VideoItem;
