import RouterView from '../view/RouterView';
import handleLogin from './login.controller.js';
class routerController {
  constructor() {
    this.routerView = new RouterView();
    this.defaultPage();
    this.login();
  }

  defaultPage() {
    // The default when loading the web is the login page
    history.pushState(null, '', '/login');
    this.routerView.router.changeRoute();
  }

  login() {
    document.querySelector('.btn-login').addEventListener('click', () => {
        handleLogin();
    });
  }
}

export default routerController;
