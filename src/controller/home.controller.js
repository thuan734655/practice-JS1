import Router from '../router/Router.js';
import { getMovies } from '../services/movie.service.js';
import { getTvShows } from '../services/tvShows.service.js';
import { getVideos } from '../services/videos.service.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8; // Number of videos to display per page
let currentPage = 1; // Current page for pagination
let allVideos = []; // Store all videos for filtering and pagination
const fetchVideosByCategory = async (category) => {
  const videoSources = {
    all: getVideos,
    movies: getMovies,
    'tv-shows': getTvShows,
  };

  const videoList = await (videoSources[category] || videoSources['all'])();

  // Determine the button label based on the category
  let buttonLabel;
  if (category === 'tv-shows') {
    buttonLabel = 'TV Shows'; // Custom label for TV Shows
  } else {
    buttonLabel = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize other categories
  }

  return {
    videoList,
    count: videoList.length,
    buttonLabel,
  };
};

const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  movieContainer.innerHTML = movieContainer
    ? listMovies(movies)
    : console.error('Failed to select the movie container');

  changeToPageDetail();
};

const changeToPageDetail = () => {
  const router = new Router();
  const videosElement = document.querySelectorAll('.list-movies-container');
  videosElement.forEach((video) => {
    video.addEventListener('click', () => {
      router.navigateTo(`/tvshow/details?idVideo=${video.id}`);
    });
  });
};

const updateVideoCount = (title, count) => {
  const quantityContainer = document.querySelector('.quantity-videos');
  if (quantityContainer)
    quantityContainer.innerHTML = `${title} <span>(${count})</span>`;
};

// Function to filter videos based on the search term
const filterMoviesBySearch = (searchTerm) =>
  allVideos.filter((video) =>
    video.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

const setupSearchListener = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const filteredVideos = filterMoviesBySearch(event.target.value);
      renderPaginatedMovies(filteredVideos); // Call this function with the filtered video list
      updateVideoCount('Search Results', filteredVideos.length); // Update the count of videos found
    });
  }
};

const renderPaginatedMovies = (videos) => {
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  renderMovies(paginatedVideos);
  updatePaginationControls(totalPages);
};

const updatePaginationControls = (totalPages) => {
  const paginationContainer = document.querySelector('.pagination-controls');
  if (!paginationContainer) return;

  paginationContainer.innerHTML = ''; // Clear existing controls
  const createButton = (text, onClick, disabled = false) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.disabled = disabled;
    button.addEventListener('click', onClick);
    return button;
  };

  paginationContainer.appendChild(
    createButton(
      'Previous',
      () => {
        if (currentPage > 1) {
          currentPage--;
          renderPaginatedMovies(allVideos);
        }
      },
      currentPage === 1
    )
  );

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.appendChild(
      createButton(
        i,
        () => {
          currentPage = i;
          renderPaginatedMovies(allVideos);
        },
        false
      )
    );
  }

  paginationContainer.appendChild(
    createButton(
      'Next',
      () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderPaginatedMovies(allVideos);
        }
      },
      currentPage === totalPages
    )
  );
};

const setupSubNavListeners = () => {
  const navButtons = document.querySelectorAll('.subNav-container button');

  navButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      navButtons.forEach((btn) => btn.classList.remove('button-active'));
      event.target.classList.add('button-active');

      const selectedCategory = event.target.id;
      const { videoList, count, buttonLabel } =
        await fetchVideosByCategory(selectedCategory);
      allVideos = videoList; // Store all videos for filtering and pagination
      currentPage = 1; // Reset to the first page
      renderPaginatedMovies(allVideos);
      updateVideoCount(buttonLabel, count);
    });
  });
};

const homeController = async () => {
  const {
    videoList: fetchedVideos,
    count,
    buttonLabel,
  } = await fetchVideosByCategory('all');
  allVideos = fetchedVideos; // Store all videos for filtering and pagination
  renderPaginatedMovies(allVideos);
  updateVideoCount(buttonLabel, count);

  changeToPageDetail();
  setupSearchListener();
  setupSubNavListeners();
};

export default homeController;
