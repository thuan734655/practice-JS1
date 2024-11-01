const form_update = (video) => {
  const releaseDateFormatted = new Date(video.releaseDate)
    .toISOString()
    .split('T')[0];
  const lastAirDateFormatted = new Date(video.lastAirDate)
    .toISOString()
    .split('T')[0];
  return `
    <form id="update-feature-form">
                <div class="form-group">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" maxlength="255" required value="${video.fullName}" placeholder="Enter your full name">
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" required placeholder="Enter video description">${video.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="star">Star:</label>
                    <input type="number" max="10" id="star" name="star" step="0.1" required value="${video.star}" placeholder="Rate from 0 to 10">
                </div>
                <div class="form-group">
                    <label for="avatar">Avatar:</label>
                    <input type="file" id="avatar" name="avatar" value=${video.avatar} accept="image/*">
                </div>
                <div class="form-group">
                    <label for="background">Background:</label>
                    <input type="file" id="background" name="background" value=${video.background} accept="image/*">
                </div>
                <div class="form-group">
                    <label for="releaseDate">Release Date:</label>
                    <input type="date" id="releaseDate" name="releaseDate" required value="${releaseDateFormatted}">
                </div>
                <div class="form-group">
                    <label for="runTime">Run Time:</label>
                    <input type="text" id="runTime" name="runTime" maxlength="50" required value="${video.runTime}" placeholder="Enter run time (e.g., 1h 30m)">
                </div>
                <div class="form-group">
                    <label for="genres">Genres:</label>
                    <input type="text" id="genres" name="genres" maxlength="500" required value="${video.genres}" placeholder="Enter genres (comma separated)">
                </div>
                <div class="form-group">
                    <label for="status">Status:</label>
                    <input type="text" id="status" name="status" maxlength="500" required value="${video.status}" placeholder="Enter video status">
                </div>
                <div class="form-group">
                    <label for="lastAirDate">Last Air Date:</label>
                    <input type="date" id="lastAirDate" name="lastAirDate" required value="${lastAirDateFormatted}">
                </div>
                <div class="form-group">
                    <label for="episodes">Episodes:</label>
                    <input type="number" id="episodes" name="episodes" required value="${video.episodes}" placeholder="Enter number of episodes">
                </div>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" maxlength="255" required value="${video.category}" placeholder="Enter video category">
                </div>
                <div class="form-group">
                    <label for="noOfSeasons">No of Seasons:</label>
                    <input type="number" id="noOfSeasons" name="noOfSeasons" required value="${video.noOfSeasons}" placeholder="Enter number of seasons">
                </div>
                <button type="submit" class="btn-update-video">Update Video</button>
            </form>
    `;
};

export default form_update;
