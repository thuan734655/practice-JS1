import { IcLogo } from '../../resources/assets/icons/index.js';
import navChild from '../components/navChild.js';
import icArrowRight from '../../resources/assets/icons/ic-arrow-right.js';

const listNav = [
  { text: 'Movies', href: '/movies' },
  { text: 'TV Shows', href: '/tvshows' },
];

const listNavIcon = [
  {
    text: `<figure> ${icArrowRight()} <figcaption>Logout</figcaption> </figure>`,
    href: '/login',
  },
];

const header = () => {
  return `
  <header id = "rootApp">
      <div class="header--logo logo">
          <figure>
              <img class="logo" src="${IcLogo}" alt="logo">
          </figure>
      </div>
      <div class="header--nav">
         <ul> ${navChild(listNav)} </ul>
         <ul>  ${navChild(listNavIcon)} </ul>
      </div>
  </header>
  `;
};

export default header;
