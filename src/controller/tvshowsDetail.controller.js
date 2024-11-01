import { getTvShowsbyId } from '../services/tvShows.service';
import loadBox from '../view/components/box';

const srcStar = 'https://s3.cloudfly.vn/practice-js/images/ic-star.svg';
const loader = async (idVideo) => {
  const data = await getTvShowsbyId(idVideo);
  const {
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
  } = data;

  const renderDOm = () => {
    document.querySelector('.right--head figure').innerHTML =
      ` <img src="${srcStar}" alt="icon star">
  <figcaption>${star}</figcaption>`;

    document.querySelector('.top-container figure').innerHTML =
      ` <img src="http://localhost:3000${background}" alt="backdroung">`;

    document.querySelector('.bottom-container--left figure').innerHTML =
      ` <img src="http://localhost:3000${avatar}" alt="avatar">`;
  };
  // Helper function to format dates
  const formatDate = (date) => new Date(date).toLocaleDateString();

  // Build the dataBottomBody array using the destructured values
  const dataBottomBody = [
    { className: 'body-box type', title: 'Type', value: category },
    { className: 'body-box status', title: 'Status', value: status },
    {
      className: 'body-box first-air-date',
      title: 'First air date',
      value: formatDate(releaseDate),
    },
    {
      className: 'body-box last-air-date',
      title: 'Last air date',
      value: formatDate(lastAirDate),
    },
    {
      className: 'body-box seasons',
      title: 'No. of Seasons',
      value: noOfSeasons,
    },
    {
      className: 'body-box episodes',
      title: 'No. of episodes',
      value: episodes,
    },
    {
      className: 'body-box run-time',
      title: 'Episode run time',
      value: `${runTime} min`,
    },
    { className: 'body-box genres', title: 'Genres', value: genres },
  ];
  renderDOm();
  return dataBottomBody;
};

const render = (videos) => {
  const boxElement = document.querySelector('.right--body');
  const html = loadBox(videos);
  boxElement.innerHTML = html;
};
const getIdVideo = () => {
  const idVideo = localStorage.getItem('lastSelectedVideoId');
  console.log(idVideo);
  return idVideo;
};

const TvShowsDetailsController = async () => {
  const idVideo = getIdVideo();
  const videos = await loader(idVideo);
  render(videos);
};

export default TvShowsDetailsController;
