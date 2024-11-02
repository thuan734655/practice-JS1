import Router from '../router/Router.js';
import { getMovies } from '../services/movie.service.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8; // Number of videos to display per page
let currentPage = 1; // Current page for pagination
let allVideos = []; // Store all videos for filtering and pagination

/** Fetch all movies from the service */
const fetchVideosByCategory = async () => {
  const videoList = await getMovies();
  console.log(videoList); // Log fetched videos for debugging
  return videoList;
};

/** Render movies into the container */
const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  if (movieContainer) {
    movieContainer.innerHTML = listMovies(movies);
    changeToPageDetail();
  } else {
    console.error('Unable to select the video container.');
  }
};

/** Set up click event for video elements to navigate to details page */
const changeToPageDetail = () => {
  const videosElement = document.querySelectorAll('.list-movies-container');
  videosElement.forEach((video) => {
    video.addEventListener('click', () => {
      localStorage.setItem('lastSelectedVideoId', video.id);
      Router.navigateTo(`/tvshow/details`);
    });
  });
};

/** Update the displayed video count */
const updateVideoCount = (count) => {
  const quantityContainer = document.querySelector('.quantity-videos');
  if (quantityContainer) {
    quantityContainer.innerHTML = `${count} items`;
  }
};

/** Filter videos based on search input */
const filterMoviesBySearch = (searchTerm) =>
  allVideos.filter((video) =>
    video.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

/** Set up search listener for dynamic video filtering */
const setupSearchListener = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const filteredVideos = filterMoviesBySearch(event.target.value);
      renderPaginatedMovies(filteredVideos);
      updateVideoCount(filteredVideos.length); // Update count of search results
    });
  }
};

/** Render a paginated view of movies */
const renderPaginatedMovies = (videos) => {
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  renderMovies(paginatedVideos);
  updatePaginationControls(totalPages);
};

/** Create pagination controls */
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

/** Set up navigation link in the section title */
const handleLink = () => {
  document
    .querySelector('.section-main--title p')
    .addEventListener('click', () => {
      Router.navigateTo('/home');
    });
};

/** Main controller to initialize data and set up page */
const videoController = async () => {
  const fetchedVideos = await fetchVideosByCategory();
  allVideos = fetchedVideos; // Store videos globally for filtering and pagination
  console.log(allVideos); // Log all videos for debugging
  renderPaginatedMovies(allVideos);
  updateVideoCount(fetchedVideos.length);

  changeToPageDetail();
  setupSearchListener();
  handleLink();
};

export default videoController;
