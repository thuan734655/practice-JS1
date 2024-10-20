import axiosClient from './axiosClient';
import list_movies from '../view/components/list-movies.js';

const getAllMovies = async (req) => {
  try {
    const res = await axiosClient.get('/movies/all', req);
    console.log(res);
    const html = list_movies(res);
    const moviesDOM = document.querySelector('.section-main--list-movies');
    if (moviesDOM) {
      moviesDOM.innerHTML = html;
    } else {
      console.log('select container list movies fail');
    }
  } catch (error) {
    console.error('error => ' + error);
  }
};

export default getAllMovies;
