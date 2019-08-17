import axios from 'axios';

/* const video = 'AIzaSyB4Nz6FCLWS_17_a7kKRNbNocMZ8A8N-aU'; */
const KEY = 'AIzaSyDiZhDyGotVlEePSSyPwvSgnHkq2qpMWIE';
/* const newvid = 'AIzaSyBOwE51Xh7q-4mn0Pmnhalap0fo3gzREVE'; */

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
