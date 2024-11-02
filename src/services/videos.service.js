import axiosClient from './axiosClient';

export const getVideos = async () => {
  try {
    const res = await axiosClient.get('/videos');
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export const getMyList = async (idUser) => {
  try {
    const res = await axiosClient.get('/videos/mylist', {
      params: { idUser }, 
      withCredentials: true,
    });
    return res.data.data;
  } catch (error) {
    console.error('Error fetching my list:', error);
    throw error; // Re-throw the error so it can be handled by the caller if needed
  }
};

export const addVideo = async (formData) => {
  console.log(formData)
  try {
    const res = await axiosClient.post('/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return res;
  } catch (err) {
    console.log('Add new video fail => ' + err);
  }
};

export const getInfoVideobyId = async (idVideoReq) => {
  try {
    const res = await axiosClient.get('/video/information', {
      params: { idVideo: idVideoReq },
    });
    return res.data.data;
  } catch (error) {
    console.error(
      'error =>',
      error.response ? error.response.data : error.message
    );
  }
};
