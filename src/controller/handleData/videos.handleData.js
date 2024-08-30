import list_movies from "../../view/components/list-movies"

const handleVideo = (dataMovies=[]) => {
  //convert data to code html 
  const html = list_movies(dataMovies);
  const moviesDOM = document.querySelector('.section-main--list-video');
  if(moviesDOM) {
    moviesDOM.innerHTML = html;
  }
  else {
    console.log("select container list movies fail");
  }

  //update quantity videos
   const quantityVideos = dataMovies.length;
   
   const quantityElement = document.querySelector('.section-main--desc-subNav');
   if(quantityElement) {
     quantityElement.innerText = `${quantityVideos} items`
   }
}

export default handleVideo;
