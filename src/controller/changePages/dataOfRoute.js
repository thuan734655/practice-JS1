/*
 This file will provide code html for route
  ex:
      this.router.addRoute('/home', homePage());
      use "addRoute" to add code html from homePage return into route "/home"
*/
import Router from '../../router/Router.js';
import homePage from '../../view/pages/home.js';

class dataOfRoute {
  constructor() {
    this.router = new Router();
    this.initRoute();
  }
  initRoute() {
    this.router.addRoute('/home', homePage());
  }
}

export default dataOfRoute;
