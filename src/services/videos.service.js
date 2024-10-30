import axiosClient from './axiosClient';

export const getVideos = async () => {
  try {
    const res = await axiosClient.get('/videos');
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export const getMyList = async () => {
  try {
    const res = await axiosClient.get('/videos/mylist', {
      withCredentials: true,
    });
    return res.data.data;
  } catch (error) {
    console.error('error => ' + error);
  }
};

export const addVideo = async (formData) => {
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
