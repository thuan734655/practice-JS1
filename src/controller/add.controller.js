import Router from '../router/Router.js';
import { addVideo, getMyList } from '../services/videos.service.js';
import form_add from '../view/components/form-add.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8; // Số video hiển thị mỗi trang
let currentPage = 1; // Trang hiện tại
let allVideos = []; // Lưu trữ tất cả video để lọc và phân trang

const getMyList = async () => {
  return (videos = await getMyList());
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

// Hàm lọc video theo từ khóa tìm kiếm
const filterMoviesBySearch = (searchTerm) =>
  allVideos.filter((video) =>
    video.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

const setupSearchListener = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const filteredVideos = filterMoviesBySearch(event.target.value);
      renderPaginatedMovies(filteredVideos);
      updateVideoCount('Search Results', filteredVideos.length); // Cập nhật số lượng video tìm thấy
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

  paginationContainer.innerHTML = ''; // Xóa các điều khiển hiện có
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

const visibleAddForm = () => {
  const form_add_element = document.querySelector('.form-add');
  document.querySelector('#add-new-item').addEventListener('click', () => {
    form_add_element.innerHTML = form_add();

    document.querySelector('.btn-cancel').addEventListener('click', () => {
      form_add_element.innerHTML = '';
    });

    document
      .querySelector('#add-feature-form')
      .addEventListener('submit', handleAddNewVideo);
  });
};

const handleAddNewVideo = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const result = await addVideo(formData);
    console.log(result);
    if (result.success === true) {
      alert('add new item successful');
      document.querySelector('.form-add').innerHTML = '';

      const videoList = await getMyList();
      allVideos = videoList;
      renderPaginatedMovies(allVideos);
    } else {
      alert('add new item fail');
    }
  } catch (err) {
    console.log('err add => ', err);
  }
};

const addController = async () => {
  const videoList = await getMyList();
  allVideos = videoList;
  renderPaginatedMovies(allVideos);

  changeToPageDetail();
  setupSearchListener();

  visibleAddForm();
};

export default addController;
