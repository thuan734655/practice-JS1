import Router from '../router/Router';
import { getVideos } from '../services/videos.service';
import loadBox from '../view/components/box';

/** Load video data and count categories */
const loader = async () => {
  const videos = await getVideos();
  // Count movies and TV shows based on category
  return videos.reduce(
    (counts, element) => {
      if (element.category === 'Movie') counts.movieCount++;
      else if (element.category === 'TV Show') counts.tvshowCount++;
      return counts;
    },
    { movieCount: 0, tvshowCount: 0 }
  );
};

/** Render data boxes on the dashboard */
const render = (dataLoad) => {
  const dataBox = [
    {
      className: 'body--movies welcome-body-box',
      value: 'Movies',
      title: dataLoad.movieCount,
    },
    {
      className: 'body--tvshows welcome-body-box',
      value: 'TV Shows',
      title: dataLoad.tvshowCount,
    },
    {
      className: 'body--suggestions welcome-body-box',
      value: 'Suggestions',
      title: 7, // Static count for Suggestions
    },
    {
      className: 'body--Manual-suggestions welcome-body-box',
      value: 'Manual Suggestions',
      title: 3, // Static count for Manual Suggestions
    },
  ];
  // Render the boxes into the welcome body section
  const html = loadBox(dataBox);
  document.querySelector('.welcome--body').innerHTML = html;
};

const handleLink = () => {
  const link = document.querySelectorAll('.Quick-links--body button');
  link.forEach((element) => {
    element.addEventListener('click', () => {  
      Router.navigateTo(`/${element.id}`);
    });
  });
};

const dashboardController = async () => {
  const resultLoad = await loader();
  render(resultLoad);
  handleLink();
};

export default dashboardController;
