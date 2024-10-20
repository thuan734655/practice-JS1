import header from '../layout/header';
import footer from '../layout/footer';

const homePage = () => {
  return `
    ${header()}
    <section class ="section-main">
     <div class="section-main--title">
       <h3>MaileHereko</h3>
     </div> <!-- end section-main--title --> 
     <div class="section-main--desc">
      <p>List of movies and TV Shows, I, <span>Pramod Poudel</span> have watched till date.
      <br> Explore what I have watched and also feel free to make a suggestion. 😉</p>
     </div> <!-- end section-main--desc--> 
     <div class ="section-main--search">
      <div class="search-container">
       <input class="search-container--input" type="text" placeholder="Search Movies or TV Shows">
       <img class="search-container--icon" src="https://s3.cloudfly.vn/practice-js/images/search-normal.svg" alt="icon search">
      </div> 
     </div> <!-- end section-main--search-->
     <div class="section-main--subNav">
      <div class="subNav-container">
       <button class="subNav-container--btn-all">All</button>
       <button class="subNav-container--btn-movies">Movies</button>
       <button class="subNav-container--btn-tvShows">TV Shows</button>
      </div>
     </div> <!-- end section-main--subNav-->
      <p class="section-main--desc-subNav">ALL<span>(120)</span></p>
      <div class="section-main--list-movies"></div>
    </section>
    ${footer()}
    `;
};

export default homePage ;