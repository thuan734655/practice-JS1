import axiosClient from './axiosClient';

const getAllMovies = (req) => {
  try {
    const res = axiosClient.get('/movies/all', req);
    return res;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export {getAllMovies};
