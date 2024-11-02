import footer from '../layout/footer';
import header from '../layout/header';
import { IcError } from '../../resources/assets/icons/index.js';
const errorPage = () => {
  return `
    ${header()}
    <section class="error-page">
     <div class="error-page__container">
      <div class="error-page__container--head">
       <figure>
        <img src="${IcError}" alt="error image">
       </figure>
      </div>
      <div class="error-page__container--body">
        <p class="body--title">Lost your way?</p>
        <p class="body--desc">Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
        <button class="body--button">Go home</button>
      </div>
     </div>
    </section>
    ${footer()}
    `;
};

export default errorPage;
