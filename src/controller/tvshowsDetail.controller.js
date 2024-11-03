import Router from '../router/Router';
import { getInfoVideobyId } from '../services/videos.service';
import loadBox from '../view/components/box';

const srcStar = 'https://s3.cloudfly.vn/practice-js/images/ic-star.svg';
const loader = async (idVideo) => {
  const data = await getInfoVideobyId(idVideo);
  console.log(data);
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
      ` <img src="https://practice-js-server.onrender.com${background}" alt="background">`;

    document.querySelector('.bottom-container--left figure').innerHTML =
      ` <img src="https://practice-js-server.onrender.com${avatar}" alt="avatar">`;
  };

  const formatDate = (date) => new Date(date).toLocaleDateString();

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
  return idVideo;
};

const handleLink = () => {
  const links = document.querySelectorAll('.top-detail-container--nav .link');
  console.log(links);
  links.forEach((element) => {
    element.addEventListener('click', () => {
      Router.navigateTo(element.getAttribute('href'));
    });
  });
};

const TvShowsDetailsController = async () => {
  const idVideo = getIdVideo();
  const videos = await loader(idVideo);
  render(videos);
  handleLink();
};

export default TvShowsDetailsController;
