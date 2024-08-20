import axiosClient from "./axiosClient.js";

const login_api = async (reqBody) => {
    try {
      const res = await axiosClient.post('/user/login', reqBody);
      console.log(res);
      return res;
    } catch (error) {
      console.log("error => " + error);
    }
  };

export default login_api;
