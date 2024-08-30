import axiosClient from "./axiosClient";

const routgetAllTVShows = (req) => {
    try {
        const res = axiosClient.get('/tvshows/all', req);
        return res;
      } catch (error) {
        console.error('error => ' + error);
      }
}

export default routgetAllTVShows;
