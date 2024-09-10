import tvShowsDetail_API from "../../services/TvShow.service";

const getDataTvShowDetail = (data = {}) => {
  const res = tvShowsDetail_API(data);
  console.log(res);
  if(res) {
    return JSON.parse(res);
  }
  else {
    console.log("res data tvShowDetail err");
  }
}

export default getDataTvShowDetail;
