import Router from '../router/Router.js';
import { addVideo, getMyList } from '../services/videos.service.js';
import formAdd from '../view/components/form-add.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8;
let currentPage = 1;
let allVideos = [];
let filteredVideos = []; // Store the filtered video list

/** Fetch video list */
const fetchVideoList = async () => {
  allVideos = await getMyList();
  filteredVideos = []; // Reset filtered list
  renderPaginatedVideos(allVideos);
};

/** Render video list */
const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  if (movieContainer) {
    movieContainer.innerHTML = listMovies(movies);
    handleMovieClick();
  } else {
    console.error('Failed to find movie container');
  }
};

/** Render paginated videos */
const renderPaginatedVideos = (videos) => {
  const videoList = videos;
  const totalVideos = videoList.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = videoList.slice(
    startIndex,
    startIndex + videosPerPage
  );

  renderMovies(paginatedVideos);
  updatePaginationControls(totalPages);
};

/** Update pagination controls */
const updatePaginationControls = (totalPages) => {
  const paginationContainer = document.querySelector('.pagination-controls');
  if (!paginationContainer) return;

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
          renderPaginatedVideos(
            filteredVideos.length ? filteredVideos : allVideos
          );
        }
      },
      currentPage === 1
    )
  );

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.appendChild(
      createButton(i, () => {
        currentPage = i;
        renderPaginatedVideos(
          filteredVideos.length ? filteredVideos : allVideos
        );
      })
    );
  }

  paginationContainer.appendChild(
    createButton(
      'Next',
      () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderPaginatedVideos(
            filteredVideos.length ? filteredVideos : allVideos
          );
        }
      },
      currentPage === totalPages
    )
  );
};

/** Handle search input */
const handleSearchInput = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const searchTerm = event.target.value.trim().toLowerCase();
      filteredVideos = allVideos.filter((video) =>
        video.fullName.toLowerCase().includes(searchTerm)
      );
      currentPage = 1; // Reset current page on search
      renderPaginatedVideos(filteredVideos);
    });
  }
};

/** Handle movie click event */
const handleMovieClick = () => {
  const videoElements = document.querySelectorAll('.list-movies-container');

  videoElements.forEach((video) => {
    video.addEventListener('click', () => toggleActionButtons(video));
  });

  const toggleActionButtons = (video) => {
    const actionButtons = video.querySelector('.action-buttons');

    const lastSelectedVideoId = localStorage.getItem('lastSelectedVideoId');
    if (lastSelectedVideoId && lastSelectedVideoId !== video.id) {
      const lastSelectedVideo = document.getElementById(lastSelectedVideoId);
      if (lastSelectedVideo) {
        lastSelectedVideo.querySelector('.action-buttons').style.display =
          'none';
      }
    }

    localStorage.setItem('lastSelectedVideoId', video.id);
    actionButtons.style.display = 'block';
    attachButtonHandlers(actionButtons);
  };

  const attachButtonHandlers = (actionButtons) => {
    const btnView = actionButtons.querySelector('.btn-view');
    const btnEdit = actionButtons.querySelector('.btn-edit');
    const btnDelete = actionButtons.querySelector('.btn-delete');

    btnView.onclick = () => {
      const router = new Router();
      router.navigateTo(`/tvshow/details`);
    };
    btnEdit.onclick = () => console.log('Edit');
    btnDelete.onclick = () => console.log('Delete');
  };
};

/** Display add video form */
const handleAddFormDisplay = () => {
  const formAddElement = document.querySelector('.form-add');
  document.querySelector('#add-new-item').addEventListener('click', () => {
    formAddElement.innerHTML = formAdd();

    document.querySelector('.btn-cancel').addEventListener('click', () => {
      formAddElement.innerHTML = '';
    });

    document
      .querySelector('#add-feature-form')
      .addEventListener('submit', handleAddNewVideo);
  });
};

/** Handle adding a new video */
const handleAddNewVideo = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  try {
    const result = await addVideo(formData);
    if (result.success) {
      alert('Add new item successful');
      document.querySelector('.form-add').innerHTML = '';

      allVideos = await getMyList();
      filteredVideos = []; // Reset filtered list
      renderPaginatedVideos(allVideos);
    } else {
      alert('Add new item failed');
    }
  } catch (err) {
    console.error('Error adding video:', err);
  }
};

/** Initialize controller */
const addController = async () => {
  await fetchVideoList();
  handleSearchInput();
  handleAddFormDisplay();
};

export default addController;
