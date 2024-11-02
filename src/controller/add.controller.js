import Router from '../router/Router.js';
import { addVideo, getMyList } from '../services/videos.service.js';
import formAdd from '../view/components/form-add.js';
import listMovies from '../view/components/list-movies.js';
import { handleDeleteVideo, setAllVideos } from './delete.controller.js';

const videosPerPage = 8;
let currentPage = 1;
let allVideos = [];
let displayedVideos = [];

/** Fetch video list */
const fetchVideoList = async () => {
  const idUser = localStorage.getItem('idUser');

  if (!idUser) {
    console.error('User ID not found in local storage.');
    return;
  }

  try {
    allVideos = await getMyList(idUser);
    if (!allVideos) {
      console.error('Failed to fetch video list.');
      return;
    }
    setAllVideos(allVideos);
    displayedVideos = allVideos;
    renderPaginatedVideos();
  } catch (error) {
    console.error('Error fetching video list:', error);
  }
};

/** Render paginated videos */
const renderPaginatedVideos = (videos) => {
  if (!displayedVideos.length) {
    console.warn('No videos to display.');
    return;
  }

  const totalVideos = displayedVideos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = displayedVideos.slice(
    startIndex,
    startIndex + videosPerPage
  );

  renderMovies(paginatedVideos);
  updatePaginationControls(totalPages);
};

/** Render movie list */
const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  if (!movieContainer) {
    console.error('Failed to find movie container');
    return;
  }
  console.log(movies);
  movieContainer.innerHTML = listMovies(movies);
  handleMovieClick();
};

/** Update pagination controls */
const updatePaginationControls = (totalPages) => {
  const paginationContainer = document.querySelector('.pagination-controls');
  if (!paginationContainer) {
    console.error('Pagination container not found');
    return;
  }

  paginationContainer.innerHTML = '';
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
          renderPaginatedVideos();
        }
      },
      currentPage === 1
    )
  );

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.appendChild(
      createButton(i, () => {
        currentPage = i;
        renderPaginatedVideos();
      })
    );
  }

  paginationContainer.appendChild(
    createButton(
      'Next',
      () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderPaginatedVideos();
        }
      },
      currentPage === totalPages
    )
  );
};

/** Handle search input */
const handleSearchInput = () => {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) {
    console.error('Search input field not found');
    return;
  }

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    displayedVideos = allVideos.filter((video) =>
      video.fullName.toLowerCase().includes(searchTerm)
    );
    currentPage = 1; // Reset current page on search
    renderPaginatedVideos();
  });
};

/** Handle movie click event */
const handleMovieClick = () => {
  const movieElements = document.querySelectorAll('.list-movies-container');
  if (!movieElements.length) {
    console.warn('No movie elements found to attach click handlers.');
    return;
  }

  movieElements.forEach((video) => {
    video.addEventListener('click', () => toggleActionButtons(video));
  });
};

const toggleActionButtons = (video) => {
  const actionButtons = video.querySelector('.action-buttons');
  if (!actionButtons) {
    console.warn('Action buttons container not found');
    return;
  }

  const lastSelectedVideoId = localStorage.getItem('lastSelectedVideoId');
  if (lastSelectedVideoId && lastSelectedVideoId !== video.id) {
    const lastSelectedVideo = document.getElementById(lastSelectedVideoId);
    if (lastSelectedVideo) {
      const lastButtons = lastSelectedVideo.querySelector('.action-buttons');
      if (lastButtons) lastButtons.style.display = 'none';
    }
  }

  localStorage.setItem('lastSelectedVideoId', video.id);
  actionButtons.style.display = 'block';
  attachButtonHandlers(actionButtons, video.id);
};

const attachButtonHandlers = (actionButtons, videoId) => {
  const btnView = actionButtons.querySelector('.btn-view');
  const btnEdit = actionButtons.querySelector('.btn-edit');
  const btnDelete = actionButtons.querySelector('.btn-delete');

  if (btnView) btnView.onclick = () => Router.navigateTo(`/tvshow/details`);
  if (btnEdit) btnEdit.onclick = () => Router.navigateTo(`/update`);
  if (btnDelete) btnDelete.onclick = () => handleDeleteVideo(videoId);
};

/** Display add video form */
const handleAddFormDisplay = () => {
  const formAddElement = document.querySelector('.form-add');
  const addButton = document.querySelector('#add-new-item');
  if (!formAddElement || !addButton) {
    console.error('Add video form or button not found');
    return;
  }

  addButton.addEventListener('click', () => {
    formAddElement.innerHTML = formAdd();

    const cancelButton = document.querySelector('.btn-cancel');
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        formAddElement.innerHTML = '';
      });
    }

    const form = document.querySelector('#add-feature-form');
    if (form) {
      form.addEventListener('submit', handleAddNewVideo);
    } else {
      console.error('Add video form not found');
    }
  });
};

/** Handle adding a new video */
const handleAddNewVideo = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  try {
    const result = await addVideo(formData);
    if (result && result.success) {
      alert('Add new item successful');
      document.querySelector('.form-add').innerHTML = '';

      const idUser = localStorage.getItem('idUser');
      if (idUser) {
        allVideos = await getMyList(idUser);
        displayedVideos = allVideos;
        renderPaginatedVideos();
      }
    } else {
      alert('Add new item failed');
    }
  } catch (err) {
    console.error('Error adding video:', err);
  }
};

/** Initialize controller */
const addController = async () => {
  try {
    await fetchVideoList();
    handleSearchInput();
    handleAddFormDisplay();
  } catch (error) {
    console.error('Error initializing controller:', error);
  }
};

export default addController;
export { renderPaginatedVideos };
