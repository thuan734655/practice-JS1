import Router from '../router/Router.js';
import { getMovies } from '../services/movie.service.js';
import { getTvShows } from '../services/tvShows.service.js';
import { getVideos } from '../services/videos.service.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8; // Number of videos to display per page
let currentPage = 1; // Current page for pagination
let allVideos = []; // Stores all videos for filtering and pagination

/**
 * Fetch videos based on category selection
 * @param {string} category - Category to filter videos by
 * @returns {object} Video list, count, and button label for the selected category
 */
const fetchVideosByCategory = async (category) => {
  const videoSources = {
    all: getVideos,
    movies: getMovies,
    'tv-shows': getTvShows,
  };

  const videoList = await (videoSources[category] || videoSources['all'])();

  // Determine the button label based on category
  const buttonLabel =
    category === 'tv-shows'
      ? 'TV Shows'
      : category.charAt(0).toUpperCase() + category.slice(1);

  return {
    videoList,
    count: videoList.length,
    buttonLabel,
  };
};

/**
 * Render movie elements to the DOM
 * @param {Array} movies - List of movies to render
 */
const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  if (movieContainer) {
    movieContainer.innerHTML = listMovies(movies);
  } else {
    console.error('Failed to select the movie container');
  }

  changeToPageDetail();
};

/**
 * Set up click events on videos to navigate to detail page
 */
const changeToPageDetail = () => {
  const videosElement = document.querySelectorAll('.list-movies-container');
  videosElement.forEach((video) => {
    video.addEventListener('click', () => {
      localStorage.setItem('lastSelectedVideoId', video.id);
      Router.navigateTo(`/tvshow/details`);
    });
  });
};

/**
 * Update displayed video count based on category or search results
 * @param {string} title - Title to display
 * @param {number} count - Video count to display
 */
const updateVideoCount = (title, count) => {
  const quantityContainer = document.querySelector('.quantity-videos');
  if (quantityContainer) {
    quantityContainer.innerHTML = `${title} <span>(${count})</span>`;
  }
};

/**
 * Filter movies based on the search term
 * @param {string} searchTerm - Term to filter videos by
 * @returns {Array} Filtered list of videos
 */
const filterMoviesBySearch = (searchTerm) =>
  allVideos.filter((video) =>
    video.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

/**
 * Set up search input event to filter videos
 */
const setupSearchListener = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const filteredVideos = filterMoviesBySearch(event.target.value);
      renderPaginatedMovies(filteredVideos);
      updateVideoCount('Search Results', filteredVideos.length);
    });
  }
};

/**
 * Render videos with pagination based on the current page
 * @param {Array} videos - List of videos to paginate
 */
const renderPaginatedMovies = (videos) => {
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  renderMovies(paginatedVideos);
  updatePaginationControls(totalPages);
};

/**
 * Update pagination controls and add click events
 * @param {number} totalPages - Total number of pages
 */
const updatePaginationControls = (totalPages) => {
  const paginationContainer = document.querySelector('.pagination-controls');
  if (!paginationContainer) return;

  paginationContainer.innerHTML = ''; // Clear existing controls

  // Helper to create pagination buttons
  const createButton = (text, onClick, disabled = false) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.disabled = disabled;
    button.addEventListener('click', onClick);
    return button;
  };

  // Previous button
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

  // Numbered page buttons
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.appendChild(
      createButton(i, () => {
        currentPage = i;
        renderPaginatedMovies(allVideos);
      })
    );
  }

  // Next button
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

/**
 * Set up event listeners for sub-navigation buttons
 */
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

/**
 * Main controller to initialize the page
 */
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
