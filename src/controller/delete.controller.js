import deleteVideoService from '../services/delete.service.js';
import { renderPaginatedVideos } from './add.controller.js';

let allVideos = [];

export const handleDeleteVideo = async (videoId) => {
  const numVideoId = Number(videoId);
  const videoToDelete = allVideos.find((video) => {
    console.log(video.idVideo);
    return video.idVideo === numVideoId;
  });
  if (!videoToDelete) {
    console.error('Video not found:', numVideoId);
    return;
  }

  try {
    const result = await deleteVideoService(numVideoId);
    console.log(result);
    if (result.success) {
      // Update the video list
      allVideos = allVideos.filter((video) => video.idVideo !== numVideoId);

      // Update UI
      renderPaginatedVideos(allVideos);
    } else {
      allVideos.push(videoToDelete);
      renderPaginatedVideos(allVideos);
      alert('Failed to delete the video, video restored to localStorage');
    }
  } catch (error) {
    console.error('Error deleting video:', error);
    localStorage.setItem(numVideoId, JSON.stringify(videoToDelete));
  }
};

export const setAllVideos = (videos) => {
  allVideos = videos;
};
