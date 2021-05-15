import axios from 'axios';

const KEY = 'AIzaSyBnVDM4iHot_QBnaz1VWBD7hNvVRL43-xI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
