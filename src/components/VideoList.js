import React from 'react';
import VideoItem from './VideoItem';
import { List } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <List>{renderList}</List>;
};

export default VideoList;
