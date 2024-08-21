const list_movies = (list=[]) => {
  return list.map((data) => {
    return `
     <div class="list-movies-container">
      <div class="list-movies-container--head">
       <div class="head-box">
        <img src="${data.iconStar}" alt="icon star">
        <p>${data.quantityStar}</p>
       </div>
      </div> <!-- end list-movies-container--head -->
      <div class="list-movies-container--body">
      <img src="${data.avtMovie} alt="avatar">
      </div>
      <div class="list-movies-container--footer">
      <p>${data.nameMovie}</p>
      </div>
     </div>
    `;
  }).join(' ');
}

export default list_movies;
