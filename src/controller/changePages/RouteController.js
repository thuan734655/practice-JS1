/*
 This file is used to decide page will change and control interact with DOM
 ex: 
  when router change to "/home"  -> add code html of homePage to the DOM.
*/
import dataOfRoute from './dataOfRoute';
import { show } from '../../view/pages/TVShowsDetails';
class RouteController {
  constructor() {
    this.dataOfRoute = new dataOfRoute();
    this.defaultPage();
  }

  defaultPage() {
    history.pushState(null, '', '/TVShows/detail');
    show();
    this.dataOfRoute.router.changeRoute();
  }
}

export default RouteController;
