import headerLogin from '../layout/header-login';

const addPage = () => {
  return `
    ${headerLogin()}
    <section class="section-main" id="rootApp">
      <div class="section-main--title">
        <h3>Add new item</h3>
      </div> <!-- end section-main--title -->
      <div class="section-main__box-search-and-mylist">
      <div class="section-main__box-search-and-mylist--search">
        <div class="search-container">
          <input id="searchInput" class="search-container--input" type="text" placeholder="Search Movies or TV Shows">
          <img class="search-container--icon" src="https://s3.cloudfly.vn/practice-js/images/search-normal.svg" alt="icon search">
        </div>
        <button>search</button>
      </div> <!-- end search-->  
      <div class="section-main__box-search-and-mylist--mylist" >
       <p id ="my-list" >My list</p>
       <p id="add-new-item" >Add new item</p>
      </div>
      </div>
      <div class="section-main--list-movies"></div>
      <div class="pagination-controls"></div> 
    </section>
     <section class="form-add"></section>
    `;
};

export default addPage;
