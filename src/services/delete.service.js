import axiosClient from './axiosClient';

const deleteVideoService = async (idVideo) => {
  const result = await axiosClient.delete('/videos/delete', {
    data: { idVideo: idVideo },
  });

  return result;
};

export default deleteVideoService;
