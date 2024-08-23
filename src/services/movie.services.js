import axiosClient from './axiosClient';

const getAllMovies = () => {
  try {
    const res = axiosClient.get('/getAllMoives', req);
    return res;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export {getAllMovies};
