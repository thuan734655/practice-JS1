import { getInfoVideobyId } from '../services/videos.service';
import form_update from '../view/components/form-update.js';
const loader = async (data) => {
  const infoVideo = ({
    category,
    status,
    releaseDate,
    lastAirDate,
    episodes,
    runTime,
    genres,
    noOfSeasons,
    avatar,
    background,
    star,
  } = data);
  console.log(infoVideo);
  const html = form_update(infoVideo);
  document.querySelector('.form-update').innerHTML = html;

  //render images images
  document.querySelector('.images--background').innerHTML =
    `<figure>  <img src="http://localhost:3000${background}" alt="background">  <figcaption>background</figcaption></figure>`;

  document.querySelector('.images--avatar').innerHTML =
    `<figure><img src="http://localhost:3000${avatar}" alt="avatar"> <figcaption>avatar</figcaption> </figure>`;
};

const getIdVideo = () => {
  const idVideo = localStorage.getItem('lastSelectedVideoId');
  return idVideo;
};

const updateController = async () => {
  const idVideo = getIdVideo();

  const infoVideo = await getInfoVideobyId(idVideo);
  loader(infoVideo);
};
export default updateController;
