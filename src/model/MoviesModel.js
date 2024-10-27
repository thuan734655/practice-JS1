class MoviesModel {
    constructor (idMovie = null,fullname = null,desc = null,star = null,avatar = null,background = null, releaseDate = null, runTime = null, generes = null, status = null, lastAirdate = null, episodes = null) {
        this.idMovie = idMovie;
        this.fullname = fullname;
        this.desc = desc;
        this.star = star;
        this.avatar = avatar;
        this.background = background;
        this.releaseDate = releaseDate;
        this.runTime = runTime;
        this.generes = generes;
        this.status = status;
        this.lastAirdate = lastAirdate;
        this.episodes = episodes;
    }
}

export default MoviesModel;
