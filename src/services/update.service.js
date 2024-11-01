import axiosClient from './axiosClient';

const updateVideoService = async (idVideo, formData) => {
  console.log(formData);
  try {
    const result = await axiosClient.put(
      `/videos/update/${idVideo}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(result);
    return result;
  } catch (error) {
    console.error('Lỗi khi cập nhật video:', error);
    throw error;
  }
};

export default updateVideoService;
