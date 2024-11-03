import header from '../layout/header';

const TvShowsDetailsPage = () => {
  return `
     ${header()}
      <section class="section-main-tvshow"  id= "rootApp"> 
       <div class="section-main-tvshow__container">
        <div class="section-main-tvshow__container--top">
        <div class="top-container">
           <figure></figure>
         <div class="top-detail">
          <div class="top-detail-container">
           <div class="top-detail-container--nav">
            <p class="nav-MaileHereko link" href="/home">MaileHereko</p>
            <p>/</p>
            <p class="nav-TVShows link" href="/tvshows">TV Shows</p>
           </div> 
           <div class="top-detail-container--name-movie">Lost In Space</div>
          </div>
         </div> <!-- end top-detail --> 
        </div>
        </div> <!-- end section-main__container--top --> 
        <div class="section-main-tvshow__container--bottom">
        <div class="bottom-container">
         <div class="bottom-container--left">
        <figure></figure>
         </div>
         <div class="bottom-container--right">
          <div class="right--head">
           <p class="head--title">Have You Seen Our Robot?</p>
           <p class="head--desc">The mission to save Scarecrow takes an unexpected turn, throwing the Resolute into chaos. Judy hatches a plan to get a ship to Alpha Centauri.</p>
           <figure></figure>
           </div> <!-- end right--head --> 
          <div class="right--body"></div>
         </div>
        </div>
        </div><!-- end section-main-tvshow__container--bottom -->
       </div> 
      </section>
    `;
};

export default TvShowsDetailsPage;
