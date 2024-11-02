import Router from '../router/Router.js';
import { getMovies } from '../services/movie.service.js';
import listMovies from '../view/components/list-movies.js';

const videosPerPage = 8; // Số video hiển thị trên mỗi trang
let currentPage = 1; // Trang hiện tại cho phân trang
let allVideos = []; // Lưu trữ tất cả video để lọc và phân trang

const fetchVideosByCategory = async () => {
  const videoList = await getMovies();
  console.log(videoList);
  return videoList;
};

const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.section-main--list-movies');
  if (movieContainer) {
    movieContainer.innerHTML = listMovies(movies);
    changeToPageDetail();
  } else {
    console.error('Không thể chọn container video.');
  }
};

const changeToPageDetail = () => {
  const videosElement = document.querySelectorAll('.list-movies-container');
  videosElement.forEach((video) => {
    video.addEventListener('click', () => {
      localStorage.setItem('lastSelectedVideoId', video.id);
      Router.navigateTo(`/tvshow/details`);
    });
  });
};

const updateVideoCount = (count) => {
  const quantityContainer = document.querySelector('.quantity-videos');
  if (quantityContainer) {
    quantityContainer.innerHTML = `${count} items`;
  }
};

// Hàm để lọc video theo từ khóa tìm kiếm
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
      updateVideoCount(filteredVideos.length); // Cập nhật số lượng video tìm thấy
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
const handleLink = () => {
  document
    .querySelector('.section-main--title p')
    .addEventListener('click', () => {
      Router.navigateTo('/home');
    });
};

const videoController = async () => {
  const fetchedVideos = await fetchVideosByCategory();
  const allVideos = fetchedVideos;
  console.log(allVideos);
  renderPaginatedMovies(allVideos);
  updateVideoCount(fetchedVideos.length);

  changeToPageDetail();
  setupSearchListener();
  handleLink();
};

export default videoController;
