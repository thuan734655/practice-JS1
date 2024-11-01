import loginPage from '../view/pages/login';
import login from '../controller/login.controller.js';
import homePage from '../view/pages/home.js';
import homeController from '../controller/home.controller.js';
import TvShowsDetailsPage from '../view/pages/TvShowsDetails.js';
import TvShowsDetailsController from '../controller/tvshowsDetail.controller.js';
import headerController from '../controller/header.controller.js';
import addPage from '../view/pages/add.js';
import addController from '../controller/add.controller.js';
import updatePage from '../view/pages/update.js';
import updateController from '../controller/update.controller.js';

class Router {
  constructor() {
    this.routes = [
      { path: '/', view: loginPage(), controller: login },
      { path: '/login', view: loginPage(), controller: login },
      { path: '/home', view: homePage(), controller: homeController },
      {
        path: '/tvshow/details',
        view: TvShowsDetailsPage(),
        controller: TvShowsDetailsController,
      },
      { path: '/add', view: addPage(), controller: addController },
      { path: '/update', view: updatePage(), controller: updateController },
    ];
  }
  // Get content of path
  loadPage(path) {
    const [basePath] = path.split('?');
    const route = this.routes.find((route) => route.path === basePath);
    return route ? route : null;
  }

  renderPage(content, controller) {
    const rootElement = document.querySelector('#root');
    rootElement.innerHTML = content;
    // Call the controller function if provided
    if (controller) {
      controller();
      headerController();
    }
  }

  async navigateTo(path) {
    history.pushState(null, null, path);
    const route = this.loadPage(path);
    if (route) {
      this.renderPage(route.view, route.controller);
    } else {
      console.log('Page not found');
    }
  }

  init() {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });

    //if user back previous page
    window.addEventListener('popstate', () => {
      this.navigateTo(location.pathname);
    });

    // Load the initial page
    this.navigateTo(location.pathname);
  }
}

export default Router;
