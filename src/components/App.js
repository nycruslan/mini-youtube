import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Grid, useMediaQuery } from '@material-ui/core';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const matches = useMediaQuery('(max-width:1000px)');

  useEffect(() => {
    onTermSubmit('dogs');
  }, []);

  const onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />

      <Grid container direction={matches ? 'column' : 'row'}>
        <Grid item xs={matches ? null : 8}>
          <VideoDetail video={selectedVideo} />
        </Grid>
        <Grid item xs={matches ? null : 4}>
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
