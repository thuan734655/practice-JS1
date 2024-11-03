const form_add = () => {
  const idUser = localStorage.getItem('idUser');
  return `
         <div class="container">
            <button type="button" class="btn-cancel">X</button>
            <h2>Add New Video</h2>
            <form id="add-feature-form" >
                <div class="form-group">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" maxlength="255" required  placeholder="Enter your full name">
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description"  required  placeholder="Enter video description"></textarea>
                </div>
                <div class="form-group">
                    <label for="star">Star:</label>
                    <input type="number"max="10" id="star" name="star" step="0.1" required  placeholder="Rate from 0 to 10">
                </div>
                <div class="form-group">
                    <label for="avatar">Avatar:</label>
                    <input type="file" id="avatar" name="avatar" accept="image/*" required>
                </div>
                <div class="form-group">
                    <label for="background">Background:</label>
                    <input type="file" id="background" name="background" accept="image/*" required>
                </div>
                <div class="form-group">
                    <label for="releaseDate">Release Date:</label>
                    <input type="date" id="releaseDate" name="releaseDate" required>
                </div>
                <div class="form-group">
                    <label for="runTime">Run Time:</label>
                    <input type="text" id="runTime" name="runTime"  maxlength="50" required  placeholder="Enter run time (e.g., 1h 30m)">
                </div>
                <div class="form-group">
                    <label for="genres">Genres:</label>
                    <input type="text" id="genres" name="genres" maxlength="500" required  placeholder="Enter genres (comma separated)">
                </div>
                <div class="form-group">
                    <label for="status">Status:</label>
                    <input type="text" id="status" name="status" maxlength="500" required  placeholder="Enter video status">
                </div>
                <div class="form-group">
                    <label for="lastAirDate">Last Air Date:</label>
                    <input type="date" id="lastAirDate"  name="lastAirDate" required>
                </div>
                <div class="form-group">
                    <label for="episodes">Episodes:</label>
                    <input type="number" id="episodes" name="episodes" required  placeholder="Enter number of episodes">
                </div>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" maxlength="255" required  placeholder="Enter video category">
                </div>
                <div class="form-group">
                    <label for="noOfSeasons">No of Seasons:</label>
                    <input type="number" id="noOfSeasons" name="noOfSeasons" required  placeholder="Enter number of seasons">
                </div>
                <div  class="idUser-temp">
                    <input type="text" id="idUser" name="idUser" value= "${idUser}">
                </div>
                <button type="submit" class="btn-add-video">Add Video</button>
            </form>
         </div>
        `;
};

export default form_add;
