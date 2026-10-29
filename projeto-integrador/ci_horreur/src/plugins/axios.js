import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDhjMTkwZTZlZDViMWY1MTQwNDZiODU5M2M1OTVlNSIsIm5iZiI6MTc1OTI1MTk2NC4yNzYsInN1YiI6IjY4ZGMwZGZjNmMzNjViOTcwZDUzMTFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TSY2IkpuLWoFiSlTOC7JQjL1JowyV7ENgYS_eSBOtpg`,
  },
});

export default api;
