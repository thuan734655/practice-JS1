import loginPage from '../view/pages/login';
import homePage from '../view/pages/home';
import login from '../controller/login.controller.js';
import homeController from '../controller/home.controller.js';

class Router {
  constructor() {
    this.routes = [
      { path: '/', view: loginPage(), controller: login },
      { path: '/login', view: loginPage(), controller: login },
      { path: '/home', view: homePage(), controller: homeController },
    ];
  }
  // get content of path
  loadPage(path) {
    const route = this.routes.find((route) => route.path === path);
    return route ? route : null;
  }

  renderPage(content, controller, path) {
    const rootElement = document.querySelector('#root');

    if (path == '/' || path == '/login') {
      rootElement.id = 'rootLogin';
    } else {
      rootElement.id = 'rootApp';
    }
    // Update the content of the root element
    rootElement.innerHTML = content;

    // Call the controller function if provided
    if (controller) {
      controller();
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
