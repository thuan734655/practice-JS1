import footer from '../layout/footer';
import headerLogin from '../layout/header-login';

const dashboardPage = () => {
  return `
    ${headerLogin()}
    <section class="section-main-dashboard">
     <div class="section-main-dashboard__container">
      <div class="section-main-dashboard__container--welcome">
       <p class="welcome--text">Welcome</p>
       <div class="welcome--body"></div>
      </div> <!-- end welcome -->
      <div class="section-main-dashboard__container--Quick-links">
       <p class="Quick-links--text">Quick links</p>
       <div class="Quick-links--body">
        <button class="body--suggestion" id="suggestion">Suggestions</button>
        <button class="body--add" id="add">Add</button>
       </div>
      </div>
     </div>
    </section>
    ${footer()}
    `;
};

export default dashboardPage;
