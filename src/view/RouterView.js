import Router from '../router/Router.js';
import loginPage from './pages/login.js';

class RouterView {
  constructor() {
    this.router = new Router();
    this.initRoute();
  }
  initRoute() {
    this.router.addRoute('/login', loginPage());
  }
}

export default RouterView;
