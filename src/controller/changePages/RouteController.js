/*
 This file is used to decide page will change and control interact with DOM
 ex: 
  when router change to "/home"  -> add code html of homePage to the DOM.
*/
import handleVideo from '../handleData/videos.handleData';
import getAllTVShows from '../getData/getDataTVShows';
import dataOfRoute from './dataOfRoute';

class RouteController {
  constructor() {
    this.dataOfRoute = new dataOfRoute();
    this.defaultPage();
    this.displayMovies();
  }

  defaultPage() {
    history.pushState(null, '', '/TVShows');
    this.dataOfRoute.router.changeRoute();
  }
 
  async displayMovies() {
    const listMovies = await getAllTVShows();
    handleVideo(listMovies);
  }
}

export default RouteController;
