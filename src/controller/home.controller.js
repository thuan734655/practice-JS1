import getAllMovies from '../services/movie.services';

const homeController = () => {
  getAllMovies({});
};

export default homeController;
