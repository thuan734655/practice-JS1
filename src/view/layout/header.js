import { IcLogo, IcArrowRight } from '../../resources/assets/icons/index.js';
import navChild from '../components/navChild.js';

const listNav = ['Movies', 'TV Shows'];
const listNavIcon = [`<figure> <img src="${IcArrowRight}" alt="Logout"> <figcaption>Logout</figcaption> </figure>`];

const header = () => {
  return `
  <header>
      <div class="header--logo">
          <figure>
              <img src="${IcLogo}" alt="logo">
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
