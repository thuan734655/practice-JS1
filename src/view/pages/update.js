import footer from '../layout/footer';
import header from '../layout/header';
import headerLogin from '../layout/header-login';

const updatePage = () => {
  return `
   ${headerLogin()}
   <section class="section-main-update">
     <div class="section-main-update__container">
      <div class="section-main-update__container--form-update">
         <div class="container">
            <h2>Update Video</h2>
            <div class="form-update"></div>
         </div> <!-- end form-update -->
         <div class ="section-main-update__container--box-img">
         <h2 class="box-img--title">Images</h2>
         <div class="box-img--images">
          <div class ="images--avatar"></div>
          <div class ="images--background"></div>
         </div>
         </div>
      </div>
     </div>
   </section>
   ${footer()}
  `;
};

export default updatePage;
