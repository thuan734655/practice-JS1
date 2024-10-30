import { IcLogo, IcLogout } from '../../resources/assets/icons/index.js';
import navChild from '../components/navChild.js';

const listNav = [
  { text: 'Dashboard', href: '/dashboard' },
  { text: 'Suggestions', href: '/suggestions' },
  { text: 'Add', href: '/add' },
];
const listNavIcon = [
  {
    text: `<figure> <img src="${IcLogout}" alt="Logout"> <figcaption>Logout</figcaption> </figure>`,
    href: '/home',
  },
];

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
