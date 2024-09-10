import loadBox from "../../view/components/box";

const handleDataTvShowDetail = (data) => {
    const dataBottomBody = [
        { className: 'body-box type', title: 'Type', value: data },
        { className: 'body-box status', title: 'Status', value: 'Returning Series' },
        {
          className: 'body-box first-air-date',
          title: 'First air date',
          value: '2018-04-13',
        },
        {
          className: 'body-box last-air-date',
          title: 'Last air date',
          value: '2019-04-24',
        },
        { className: 'body-box seasons', title: 'No. of Seasons', value: '2' },
        { className: 'body-box episodes', title: 'No. of episodes', value: '20' },
        {
          className: 'body-box run-time',
          title: 'Episode run time',
          value: '56 min',
        },
        {
          className: 'body-box genres',
          title: 'Genres',
          value: 'Action & Adventure, Sci-Fi & Fantasy, Drama',
        },
      ];
}

export default handleDataTvShowDetail;
