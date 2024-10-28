import header from '../layout/header';
import footer from '../layout/footer';

const homePage = () => {
  return `
    ${header()}
    <section class="section-main" id="rootApp">
      <div class="section-main--title">
        <h3>MaileHereko</h3>
      </div> <!-- end section-main--title -->
      <div class="section-main--desc">
        <p>List of movies and TV Shows I, <span>Pramod Poudel</span> have watched to date.
        <br> Explore what I have watched and also feel free to make a suggestion. 😉</p>
      </div> <!-- end section-main--desc-->
      <div class="section-main--search">
        <div class="search-container">
          <input id="searchInput" class="search-container--input" type="text" placeholder="Search Movies or TV Shows">
          <img class="search-container--icon" src="https://s3.cloudfly.vn/practice-js/images/search-normal.svg" alt="icon search">
        </div>
      </div> <!-- end section-main--search-->
      <div class="section-main--subNav">
        <div class="subNav-container">
          <button id="all" class="subNav-container--btn-all button-active">All</button>
          <button id="movies" class="subNav-container--btn-movies">Movies</button>
          <button id="tv-shows" class="subNav-container--btn-tvShows">TV Shows</button>
        </div>
      </div> <!-- end section-main--subNav-->
      <p class="section-main--desc-subNav quantity-videos">ALL <span>(0)</span></p>
      <div class="section-main--list-movies"></div>
      <div class="pagination-controls"></div> 
    </section>
    ${footer()}
  `;
};

export default homePage;
