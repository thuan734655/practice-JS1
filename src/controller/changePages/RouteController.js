/*
 This file is used to decide page will change and control interact with DOM
 ex: 
  when router change to "/home"  -> add code html of homePage to the DOM.
*/
import handleMovies from '../handleData/movies.handleData';
import listALLMovies from '../getData/getDataMovies';
import dataOfRoute from './dataOfRoute';

class RouteController {
  constructor() {
    this.dataOfRoute = new dataOfRoute();
    this.defaultPage();
    this.displayMovies();
  }

  defaultPage() {
    // The default when loading the web is the login page
    history.pushState(null, '', '/home');
    this.dataOfRoute.router.changeRoute();
  }
 
  async displayMovies() {
    const listMovies = await listALLMovies();
    handleMovies(listMovies);
  }
}

export default RouteController;
