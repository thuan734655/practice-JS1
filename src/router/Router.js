import loginPage from '../view/pages/login';
import login from '../controller/login.controller.js';
import homePage from '../view/pages/home.js';
import homeController from '../controller/home.controller.js';
import TvShowsDetailsPage from '../view/pages/TvShowsDetails.js';
import TvShowsDetailsController from '../controller/tvshowsDetail.controller.js';
import { headerController } from '../controller/header.controller.js';
import addPage from '../view/pages/add.js';
import addController from '../controller/add.controller.js';
import updatePage from '../view/pages/update.js';
import updateController from '../controller/update.controller.js';
import errorPage from '../view/pages/errorPage.js';
import errorController from '../controller/error.controller.js';
import dashboardPage from '../view/pages/dashboard.js';
import dashboardController from '../controller/dashboard.controller.js';
import getCookie from '../helper/getCookie.js';
import movieController from '../controller/movie.controller.js';
import videoPage from '../view/pages/video.js';

const routes = [
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
  { path: '/error-404', view: errorPage(), controller: errorController },
  {
    path: '/dashboard',
    view: dashboardPage(),
    controller: dashboardController,
  },
  { path: '/movies', view: videoPage('Movies'), controller: movieController },
  {
    path: '/tvshows',
    view: videoPage('TV Shows'),
    controller: movieController,
  },
];

const checkAuthMiddleware = (path) => {
  const idUser = getCookie('idUser');
  console.log(idUser);
  if (!idUser && path !== '/login' && path !== '/') {
    return '/login';
  }
  return null;
};

class Router {
  static loadPage(path) {
    // const redirectPath = checkAuthMiddleware(path);
    // if (redirectPath) {
    //   return { redirect: redirectPath };
    // }

    const route = routes.find((route) => route.path === path);
    return route ? { route } : { route: null };
  }

  static renderPage(content, controller) {
    document.querySelector('#root').innerHTML = content;
    if (controller) {
      controller();
      headerController();
    }
  }

  static async navigateTo(path) {
    const { redirect, route } = this.loadPage(path);
    if (redirect) {
      history.pushState(null, null, '/error-404');
      this.renderPage(errorPage('Go login'), errorController);
      setTimeout(() => {
        alert('You must log in');
      }, 200);
    } else if (route) {
      history.pushState(null, null, path);
      this.renderPage(route.view, route.controller);
    } else {
      this.navigateTo('/error-404');
    }
  }

  static init() {
    window.addEventListener('popstate', () => {
      this.navigateTo(location.pathname);
    });

    this.navigateTo(location.pathname);
  }
}

export default Router;
