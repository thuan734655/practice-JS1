import list_movies from "../../view/components/list-movies"

const handleMovies = (dataMovies=[]) => {
  //convert data to code html 
  const html = list_movies(dataMovies);
  const moviesDOM = document.querySelector('.section-main--list-movies');
  if(moviesDOM) {
    moviesDOM.innerHTML = html;
  }
  else {
    console.log("select container list movies fail");
  }
}

export default handleMovies;
