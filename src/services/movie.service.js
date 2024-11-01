import axiosClient from './axiosClient';

export const getMovies = async () => {
  try {
    const res = await axiosClient.get('/movies');
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export { getAllMovies };
