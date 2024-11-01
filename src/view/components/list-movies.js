const list_movies = (list = []) => {
  console.log(list);
  return list
    .map((data) => {
      return `
        <div class="list-movies-container" id="${data.idVideo}" selected = "true">
          <div class="list-movies-container--head">
            <div class="head-box">
              <img src="${data.iconStar}" alt="icon star">
              <p>${data.star}</p>
            </div>
          </div> <!-- end list-movies-container--head -->
          <div class="list-movies-container--body">
            <img src="https://practice-js-server.onrender.com${data.avatar}" alt="avatar">
          </div>
          <div class="list-movies-container--footer">
            <p>${data.fullName}</p>
          </div>
         <div class="action-buttons" style="display: none;">
          <button class="btn-view">View Details</button>
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
        </div>
      `;
    })
    .join(' ');
};

export default list_movies;
