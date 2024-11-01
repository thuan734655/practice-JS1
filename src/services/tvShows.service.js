import axiosClient from './axiosClient';

export const getTvShows = async () => {
  try {
    const res = await axiosClient.get('/tvshows');
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export const getTvShowsbyId = async (idVideoReq) => {
  try {
    const res = await axiosClient.get('/video/information', {
      params: { idVideo: idVideoReq },
    });
    return res.data.data;
  } catch (error) {
    console.error(
      'error =>',
      error.response ? error.response.data : error.message
    );
  }
};
