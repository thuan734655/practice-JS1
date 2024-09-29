import { IcLogo, IcLogout } from '../../resources/assets/icons/index.js';
import navChild from '../components/navChild.js';

const listNav = ['Dashboard', 'Suggestions', 'Add'];
const listNavIcon = [`<figure> <img src="${IcLogout}" alt="Logout"> <figcaption>Logout</figcaption> </figure>`];

const headerLogin = () => {
  return `
  <div class="header-login">
      <div class="header-login--logo">
          <figure>
              <img src="${IcLogo}" alt="logo">
          </figure>
      </div>
      <div class="header-login--nav">
         <ul> ${navChild(listNav)} </ul>
         <ul>  ${navChild(listNavIcon)} </ul>
      </div>
  </div>
  `;
};

export default headerLogin;
