import axiosClient from './axiosClient';

export const getTvShows = async () => {
  try {
    const res = await axiosClient.get('/tvshows');
       return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export const getTvShowsbyId = async (idVideo) => {
  try {
    const res = await axiosClient.get('/tvshows/information', {
      idVideo: idVideo,
    });
       return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};
