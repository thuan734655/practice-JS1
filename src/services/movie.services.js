import axiosClient from './axiosClient';

<<<<<<< HEAD
export const getMovies = async () => {
  try {
    const res = await axiosClient.get('/movies');
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error); 
  }
};

=======
const getAllMovies = (req) => {
  try {
    const res = axiosClient.get('/movies/all', req);
    return res;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export {getAllMovies};
>>>>>>> cpmpleted-handleData-movies
