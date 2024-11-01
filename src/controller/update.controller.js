import { getInfoVideobyId } from '../services/videos.service.js';
import updateVideoService from '../services/update.service.js';
import form_update from '../view/components/form-update.js';

const loader = async (data) => {
  const infoVideo = {
    fullName: data.fullName,
    description: data.description,
    category: data.category,
    status: data.status,
    releaseDate: data.releaseDate,
    lastAirDate: data.lastAirDate,
    episodes: data.episodes,
    runTime: data.runTime,
    genres: data.genres,
    noOfSeasons: data.noOfSeasons,
    avatar: data.avatar,
    background: data.background,
    star: data.star,
  };

  console.log(infoVideo);
  const html = form_update(infoVideo);
  document.querySelector('.form-update').innerHTML = html;

  // Render images
  document.querySelector('.images--background').innerHTML = `
    <figure>
      <img src="https://practice-js1.onrender.com${infoVideo.background}" alt="background">
      <figcaption>background</figcaption>
    </figure>
  `;

  document.querySelector('.images--avatar').innerHTML = `
    <figure>
      <img src="https://practice-js1.onrender.com${infoVideo.avatar}" alt="avatar">
      <figcaption>avatar</figcaption>
    </figure>
  `;
};

const getIdVideo = () => {
  const idVideo = localStorage.getItem('lastSelectedVideoId');
  return idVideo;
};

const render = async () => {
  const idVideo = getIdVideo();

  // Fetch video info and load into form
  const infoVideo = await getInfoVideobyId(idVideo);
  loader(infoVideo);
};

// Handle update form submission
const handleSubmit = async () => {
  document
    .querySelector('.form-update')
    .addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const idVideo = getIdVideo();

      try {
        const response = await updateVideoService(idVideo, formData);
        if (response.success) {
          alert('Video updated successfully!');
          render();
        } else {
          alert('Failed to update video.');
        }
      } catch (error) {
        console.error('Error updating video:', error);
        alert('Error updating video.');
      }
    });
};

const updateController = async () => {
  render();
  handleSubmit();
};

export default updateController;
