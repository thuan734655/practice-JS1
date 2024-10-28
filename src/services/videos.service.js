import axiosClient from './axiosClient';

export const getVideos = async () => {
  try {
    const res = await axiosClient.get('/videos');
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};
