import header from '../layout/header';
import footer from '../layout/footer';

const moviePage = () => {
  return `
    ${header()}
    <section class="section-main" id="rootApp">
      <div class="section-main--title">
        <p>MaileHereko</p>
        <h3>Movies</h3>
      </div> <!-- end section-main--title -->
      <div class="section-main--search">
        <div class="search-container">
          <input id="searchInput" class="search-container--input" type="text" placeholder="Search Movies or TV Shows">
          <img class="search-container--icon" src="https://s3.cloudfly.vn/practice-js/images/search-normal.svg" alt="icon search">
        </div>
      </div> <!-- end section-main--search-->
      <p class="quantity-videos"></p>
      <div class="section-main--list-movies"></div>
      <div class="pagination-controls"></div> 
    </section>
    ${footer()}
  `;
};

export default moviePage;
