/*
 This file is used to decide page will change 
 ex: 
  when router change to "/home"  -> add code html of homePage to the DOM.
*/
import handleMovies from '../handleData/movies.handleData';

class RouteController {
  constructor() {
    this.routerView = new RouterView();
    this.displayMovies();
    this.defaultPage();
  }

  defaultPage() {
    // The default when loading the web is the login page
    history.pushState(null, '', '/home');
    this.routerView.router.changeRoute();
  }
 
  displayMovies() {
    handleMovies([{}])
  }
}

export default RouteController;
