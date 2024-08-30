import header from '../layout/header';
import footer from '../layout/footer';

const TVShowsPage = () => {
  return `
    ${header()}
    <section class ="section-main">
     <div class="section-main--title">
       <h3>MaileHereko</h3>
     </div> <!-- end section-main--title --> 
     <div class="section-main--desc">
      <p>TV Shows</p>
     </div> <!-- end section-main--desc--> 
     <div class ="section-main--search">
      <div class="search-container">
       <input class="search-container--input" type="text" placeholder="Search Movies or TV Shows">
       <img class="search-container--icon" src="https://s3.cloudfly.vn/practice-js/images/search-normal.svg" alt="icon search">
      </div> 
     </div> <!-- end section-main--search-->
      <p class="section-main--desc-subNav">120 items</span></p>
      <div class="section-main--list-video"></div>
    </section>
    ${footer()}
    `;
};

export default TVShowsPage ;
