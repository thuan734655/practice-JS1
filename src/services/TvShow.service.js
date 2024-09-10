import axiosClient from "./axiosClient";

const tvShowsDetail_API = (data) => {
   const res = axiosClient.post('/information', data);
   return res;
}

export default tvShowsDetail_API;
