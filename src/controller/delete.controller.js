import deleteVideoService from '../services/delete.service.js';
import { renderPaginatedVideos } from './add.controller.js';

let allVideos = []; // Stores the complete list of videos

/**
 * Handles deleting a video by its videoId
 * @param {string | number} videoId - ID of the video to delete
 */
export const handleDeleteVideo = async (videoId) => {
  const numVideoId = Number(videoId);
  const videoToDelete = allVideos.find((video) => {
    return video.idVideo === numVideoId;
  });
  console.log(videoToDelete);

  if (!videoToDelete) {
    console.error('Video not found:', numVideoId);
    return;
  }

  // Remove the video from the list and update the view
  allVideos = allVideos.filter((video) => {
    return video.idVideo !== numVideoId;
  });
  renderPaginatedVideos(allVideos);

  try {
    const result = await deleteVideoService(numVideoId);
    if (!result.success) {
      // Restore the video if deletion failed on the server
      allVideos.push(videoToDelete);
      renderPaginatedVideos(allVideos);
      alert('Failed to delete the video, video restored to localStorage');
    }
  } catch (error) {
    console.error('Error deleting video:', error);
    // Store the video locally if there's an error
    localStorage.setItem(numVideoId, JSON.stringify(videoToDelete));
  }
};

/**
 * Updates the allVideos list with a new set of videos
 * @param {Array} videos - Array containing all videos
 */
export const setAllVideos = (videos) => {
  allVideos = videos;
};
