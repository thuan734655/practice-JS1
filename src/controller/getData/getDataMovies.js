import { getAllMovies } from '../../services/movie.services';

const listALLMovies = async() => {
 return await getAllMovies();
};

export default listALLMovies;
