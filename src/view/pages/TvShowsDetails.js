import header from '../layout/header';
import footer from '../layout/footer';
import loadImage from '../components/image';
import loadBox from '../components/box';

const imageTop = [
  {
    srcImg: 'https://s3.cloudfly.vn/practice-js/images/Lost-in-space-bgr.png',
    alt: 'bgr',
  },
];
const imageBottom = [
  {
    srcImg: 'https://s3.cloudfly.vn/practice-js/images/Lost-in-space.png',
    alt: 'avt',
  },
];
const imageStar = [
  {
    srcImg: 'https://s3.cloudfly.vn/practice-js/images/ic-star.svg',
    alt: 'icon star',
    caption: '8.1',
  },
];

const show = () => {
  console.log(loadBox(dataBottomBody));
};
const TvShowsDetails = () => {
  return `
     ${header()}
      <section class="section-main "> 
       <div class="section-main__container">
        <div class="section-main__container--top">
        <div class="top-container">
         ${loadImage(imageTop, false)} 
         <div class="top-detail">
          <div class="top-detail-container">
           <div class="top-detail-container--nav">
            <a class="nav-MaileHereko" href="/home">MaileHereko</a>
            <p>/</p>
            <a class="nav-TVShows" href="/TvShows">TV Shows</a>
           </div> 
           <div class="top-detail-container--name-movie">Lost In Space</div>
          </div>
         </div> <!-- end top-detail --> 
        </div>
        </div> <!-- end section-main__container--top --> 
        <div class="section-main__container--bottom">
        <div class="bottom-container">
         <div class="bottom-container--left">
          ${loadImage(imageBottom, false)}
         </div>
         <div class="bottom-container--right">
          <div class="right--head">
           <p class="head--title">Have You Seen Our Robot?</p>
           <p class="head--desc">The mission to save Scarecrow takes an unexpected turn, throwing the Resolute into chaos. Judy hatches a plan to get a ship to Alpha Centauri.</p>
            ${loadImage(imageStar, false)}
           </div> <!-- end right--head --> 
          <div class="right--body"></div>
         </div>
        </div>
        </div><!-- end section-main__container--bottom -->
       </div> 
      </section>
     ${footer()}
    `;
};

export default TvShowsDetails;

export { show };
